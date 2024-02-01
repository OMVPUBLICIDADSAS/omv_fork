import { Injectable, HttpException } from '@nestjs/common';
import { CreateEmailDto } from './dto/create-email.dto';
import { UpdateEmailDto } from './dto/update-email.dto';
import { MailerService } from '@nestjs-modules/mailer';
import { UpdateQuoteDto } from 'src/quote/dto/update-quote.dto';

@Injectable()
export class EmailService {

  constructor(private mails: MailerService) { }

  async quoteEmail(updateQuoteDto: UpdateQuoteDto, pdf: Buffer) {
    const maillist = updateQuoteDto.client_email.split(';');
    return await this.mails.sendMail({
      to: [... maillist, 'gerente@omvpublicidad.com'],
      from: process.env.EMAIL_USER, // from: updateQuoteDto.agent_email,
      subject: 'Respuesta a su solicitud de cotización',
      // html: updateQuoteDto.htmlQuote,
      attachments: [
        { filename: `${updateQuoteDto.client_name}_cotiza.pdf`, content: pdf },
        // { filename: `${updateQuoteDto.client_name}_cotiza.html`, content: updateQuoteDto.htmlQuote }
      ],
    })
      .catch((e) => {
        console.log(e);
        throw new HttpException(`ERROR_EMAIL ${e}`, 403);
      });
    // return 'ok';
  }

  async defaultEmailHtml(emailDto: UpdateEmailDto) {
    await this.mails.sendMail({
      to: [emailDto.to, 'gerente@omvpublicidad.com'],
      from: emailDto.from,
      subject: emailDto.subject,
      html: emailDto.html,
      // attachments: emailDto.attachments
    })
    return 'ok';
  }

  /*

  create(createEmailDto: CreateEmailDto) {
    return 'This action adds a new email';
  }

  findAll() {
    return `This action returns all email`;
  }

  findOne(id: number) {
    return `This action returns a #${id} email`;
  }

  update(id: number, updateEmailDto: UpdateEmailDto) {
    return `This action updates a #${id} email`;
  }

  remove(id: number) {
    return `This action removes a #${id} email`;
  }
  */
}
