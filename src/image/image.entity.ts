import { Prisma } from "@prisma/client";

export class Image implements Prisma.ImageUncheckedCreateInput  {
  bandaId :number;
  banda?: string;
  url: string;
}
