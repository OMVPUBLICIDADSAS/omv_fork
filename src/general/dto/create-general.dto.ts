import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateGeneralDto {
    
    @IsString()
    @IsOptional()
    address: string;

    @IsNumber()
    @IsOptional()
    consecutive: number;

    @IsString()
    @IsOptional()
    id: string;

    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    p_iva: number;

    @IsOptional()
    phone: string;

    @IsString()
    @IsOptional()
    quote_condition: string;
    
    @IsOptional()
    site: string;

}
