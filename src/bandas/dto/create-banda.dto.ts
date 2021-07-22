import { Prisma } from "@prisma/client";
import { IsString, IsInt, IsOptional } from "class-validator";
import { Banda } from "../entities/banda.entity";

export class CreateBandaDto extends Banda{
  @IsString()
  Nome: string;

  @IsInt()
  NumeroDeDiscos: number;

  @IsString()
  LinkSpotify: string;

@IsString()
@IsOptional()
  Website: string;

  @IsOptional()
  images?: Prisma.ImageCreateNestedManyWithoutBandaInput;
}
