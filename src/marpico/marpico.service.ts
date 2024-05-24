import { Inject, Injectable } from '@nestjs/common';
import { CreateMarpicoDto } from './dto/create-marpico.dto';
import { UpdateMarpicoDto } from './dto/update-marpico.dto';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { GeneralService } from 'src/general/general.service';
import { Marpico } from './schemas/marpico.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class MarpicoService {

  constructor(
    @InjectModel(Marpico.name) private marpicoModel: Model<Marpico>,
    private readonly httpService: HttpService,
    @Inject(GeneralService) private generalService: GeneralService,
  ) { }

  //private api_key = 'KlRAzNmCqZFnJTEnOPmyRC2t2WLs8xylfGMbogjGnfcb02wlvaUYXIeiNaLAQKAI';
  // private url = 'https://apipromocionales.marpico.co/api/inventarios/materialesAPI';


  @Cron('0 1,13 * * *')
  async handleCron() {
    // this.logger.debug('Called when the current second is 45');
    await this.updateFromMarpico();
    // console.log('actualizado...');
  }

  create(createMarpicoDto: CreateMarpicoDto) {
    return 'This action adds a new marpico';
  }

  async updateFromMarpico() {
    //Elimino tabla
    await this.marpicoModel.deleteMany();

    //consulto datos
    const headersRequest = {
      // 'Content-Type': 'application/json', // afaik this one is not needed
      // 'Authorization': `Basic ${encodeToken}`,
      'Content-Type': 'application/json',
      // 'Authorization': 'Api-Key ' + this.api_key,
      'Authorization': 'Api-Key ' + process.env.API_KEY
    }

    const data = await lastValueFrom(
      //this.httpService.get(this.url, { headers: headersRequest })
      this.httpService.get(process.env.MARPICO_URL, { headers: headersRequest })
    );

    // Hago cambios para guardar
    const tableData = await this.data2Schema(data);
    // Verifico si hay items sin categoría

    // Guardo en la colección
    await this.marpicoModel.insertMany(tableData).then((result: any) => {
      if (result.length > 0) {
        return { status: 200, message: 'ok' }
      }
    });

  }

  private async data2Schema(data: any) {
    const gen = await this.generalService.consecutive();
    const marpicoCatTitleList = gen.catagMARPICO as { key: string, value: string }[];



    for (let i = 0; i < data.data.results.length; i++) {
      const item = data.data.results[i];
      if (!item.subcategoria_1 || !item.subcategoria_1.categoria) { data.data.results.splice(i, 1); i--; } else {

        item.existencia = 0;
        let cantidad = 0;
        item.materiales.forEach((mat: any) => {
          item.precio = item.precio || mat.precio;
          mat.inventario = 0;
          mat.inventario_almacen.forEach((c: { cantidad: number; }) => mat.inventario += c.cantidad || 0);
          mat.inventario = mat.inventario;
          cantidad += mat.inventario;
        });
        item.existencia += cantidad;
        if (item.etiquetas) {
          const etiqList: string[] = [];
          item.etiquetas.forEach((etiq: any) => {
            if (etiq && etiq.nombre) { etiqList.push(etiq['nombre']) }
          });
        }
        item.subcategoria_1.categoria = marpicoCatTitleList.find(x => x.key === item.subcategoria_1.categoria)?.value || item.subcategoria_1.categoria;
        item.subcategoria_1 = { jerarquia: item.subcategoria_1.jerarquia, nombre: item.subcategoria_1.nombre, categoria: { jerarquia: item.subcategoria_1.categoria, nombre: item.subcategoria_1.categoria } };
      }
    }


    /*
    data.data.results.forEach((item: any) => {

      item.existencia = 0;
      let cantidad = 0;
      item.materiales.forEach((mat: any) => {
        item.precio = item.precio || mat.precio;
        mat.inventario = 0;
        mat.inventario_almacen.forEach((c: { cantidad: number; }) => mat.inventario += c.cantidad || 0);
        mat.inventario = mat.inventario;
        cantidad += mat.inventario;
      });
      item.existencia += cantidad;
      if (item.etiquetas) {
        const etiqList: string[] = [];
        item.etiquetas.forEach((etiq: any) => {
          if (etiq && etiq.nombre) { etiqList.push(etiq['nombre']) }
        });
      }
      if (item.subcategoria_1 && item.subcategoria_1.categoria) {
        item.subcategoria_1.categoria = marpicoCatTitleList.find(x => x.key === item.subcategoria_1.categoria)?.value || item.subcategoria_1.categoria;
        item.subcategoria_1 = { jerarquia: item.subcategoria_1.jerarquia, nombre: item.subcategoria_1.nombre, categoria: { jerarquia: item.subcategoria_1.categoria, nombre: item.subcategoria_1.categoria } };
      } else {
        // item.subcategoria_1.categoria = `Familia: ${item.familia} Categoría: UNKNOWN`;
        // item.subcategoria_1 = `Familia: ${item.familia} Subcategoría: UNKNOWN`;
        item.subcategoria_1 = { categoria: '00000', jerarquia: '0000000000', nombre: `Familia: ${item.familia} Subcategoría: UNKNOWN`, nombre_categoria: `Familia: ${item.familia} Categoría: UNKNOWN` }


      }
    });
    */
    return data.data.results;
  }


  findAll() {
    return this.marpicoModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} marpico`;
  }

  update(id: number, updateMarpicoDto: UpdateMarpicoDto) {
    return `This action updates a #${id} marpico`;
  }

  remove(id: number) {
    return `This action removes a #${id} marpico`;
  }
}
