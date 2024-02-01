import { Model } from 'mongoose';
import { Injectable, Inject, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateQuoteDto } from './dto/create-quote.dto';
import { UpdateQuoteDto } from './dto/update-quote.dto';
import { Quote } from './schemas/quote.schema';
import { EmailService } from 'src/email/email.service';
import { GeneralService } from 'src/general/general.service';
import puppeteer from "puppeteer";
// import * as fs from 'fs';

@Injectable()
export class QuoteService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<Quote>,
    @Inject(EmailService) private readonly emails: EmailService,
    @Inject(GeneralService) private generalService: GeneralService
  ) { }

  async create(createQuoteDto: CreateQuoteDto): Promise<Quote> {
    const consecutive = await this.generalService.consecutive();
    createQuoteDto.consecutive = consecutive.toString().padStart(6, '0');
    const createdQuote = new this.quoteModel(createQuoteDto);
    return await createdQuote.save();
  }

  async findAll(): Promise<Quote[]> {
    return await this.quoteModel.find().exec();
  }

  async findByFilter(status: number, agent_id: string): Promise<Quote[]> {
    if (!status) throw new HttpException('EMPTY_DATA', 401);
    if (status == 2) return await this.quoteModel.find({ status, agent_id }).exec();
    return await this.quoteModel.find({ status }).exec();
  }

  async findByDate(date_in: number, date_out: string): Promise<Quote[]> {
    if (!date_in || !date_out) throw new HttpException('EMPTY_DATA', 401);
    return await this.quoteModel.find({ date: { $gt: date_in, $lt: date_out } }).exec();
  }

  async findOne(id: string) {
    return await this.quoteModel.findById({ consecutive: id }).exec();
  }

  async resend(id: string, updateQuoteDto: UpdateQuoteDto): Promise<Quote> {
    const pdfBuffer = await this.html2pdf(updateQuoteDto.htmlQuote);
    return this.emails.quoteEmail(updateQuoteDto, pdfBuffer);
  }

  async update(id: string, updateQuoteDto: UpdateQuoteDto): Promise<Quote> {

    // si user no es el mismo, no lo actualiza
    const prevQuote = await this.quoteModel.findById(id);
    if (prevQuote.status === 4) throw new HttpException('FORBIDDEN', 403);
    if (updateQuoteDto.status === 4) {
      const pdfBuffer = await this.html2pdf(updateQuoteDto.htmlQuote);
      await this.emails.quoteEmail(updateQuoteDto, pdfBuffer);
    }
    return await this.quoteModel.findByIdAndUpdate(id, updateQuoteDto, { new: true });
  }

  async remove(id: string) {
    return await this.quoteModel.findByIdAndRemove(id);
  }

  // https://github.com/saemhco/nestjs-html-pdf
  // https://github.com/saemhco/nestjs-html-pdf/blob/main/src/index.ts
  async html2pdf(htmlQuote: string, options = {}) {
    try {
      const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
      const page = await browser.newPage();
      await page.setContent(htmlQuote);
      const buffer = await page.pdf({
        // path: 'output-abc.pdf',
        format: 'letter',
        printBackground: true,
        margin: {
          left: '10mm',
          top: '10mm',
          right: '10mm',
          bottom: '10mm',
        },
        ...options,
      });
      await browser.close();
      // process.exit();
      return buffer;

    } catch (e) {
      console.log(e);
      // await browser.close();
    }
  }
}
