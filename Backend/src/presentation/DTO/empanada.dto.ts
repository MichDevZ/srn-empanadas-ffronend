
import { IsNotEmpty, IsOptional, IsString, IsNumber, Min, MaxLength } from 'class-validator';

export class CreateEmpanadaDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  @IsString({ message: 'El nombre debe ser un texto' })
  @MaxLength(100, { message: 'El nombre no puede superar los 100 caracteres' })
  name: string;

  @IsNotEmpty({ message: 'El tipo es obligatorio' })
  @IsString({ message: 'El tipo debe ser un texto' })
  @MaxLength(50, { message: 'El tipo no puede superar los 50 caracteres' })
  type: string;

  @IsOptional()
  @IsString({ message: 'El relleno debe ser un texto' })
  @MaxLength(255, { message: 'El relleno no puede superar los 255 caracteres' })
  filling?: string;

  @IsNotEmpty({ message: 'El precio es obligatorio' })
  @IsNumber({}, { message: 'El precio debe ser un número' })
  @Min(100, { message: 'El precio debe ser al menos 100 CLP' })
  price: number;
}


