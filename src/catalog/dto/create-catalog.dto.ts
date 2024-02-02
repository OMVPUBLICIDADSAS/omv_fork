import { IsNotEmpty, IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateCatalogDto {
    @IsNotEmpty()
    @IsString()
    familia: string;

    @IsNotEmpty()
    @IsString()
    descripcion_comercial: string;

    @IsString()
    descripcion_larga: string;

    @IsNotEmpty()
    imagen: object;

    @IsNumber()
    existencia: number;

    @IsNumber()
    precio: number;

    @IsNotEmpty()
    subcategoria_1: object;

    @IsNotEmpty()
    materiales: object[];

    @IsString()
    @IsOptional()
    tecnica_marca_descripcion: string

    @IsString()
    lista_colores: string;

}
