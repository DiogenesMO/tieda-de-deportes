import { IsString, IsArray, IsNotEmpty, IsNumber, IsOptional, MinLength  } from "class-validator";

export class CreateTDeporteDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(20)
    article: string;

    @IsNumber()
    @IsString()
    brand: string;

    @IsString()
    @IsNotEmpty()
    address: string;

    @IsNumber()
    @IsNotEmpty()
    price: number;

    @IsNumber()
    @IsNotEmpty()
    amount: number;

    @IsString({each:true})
    @IsArray()
    @IsOptional()
    images?: string[];
}
