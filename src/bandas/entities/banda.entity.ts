import { Prisma } from "@prisma/client";

export class Banda implements Prisma.BandaUncheckedCreateInput  {
  Nome: string
  NumeroDeDiscos: number
  LinkSpotify: string
  Website: string
  images?: Prisma.ImageCreateNestedManyWithoutBandaInput;
}
