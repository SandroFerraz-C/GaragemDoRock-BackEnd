import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBandaDto } from './dto/create-banda.dto';
import { UpdateBandaDto } from './dto/update-banda.dto';

@Injectable()
export class BandasService {
  constructor(private readonly prisma: PrismaService){}

  private readonly _include = {
    
  }

  create(data: CreateBandaDto) {
    return this.prisma.banda.create({
      data,
      include:{
        images:{
          select:{
            url:true,
          },
        },
      },
    });
  }

  findAll() {
    return this.prisma.banda.findMany({
      include:{
        images:true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.banda.findUnique({
      where: {id},
      include:{
        images:true,
      },
    });
  }

  update(id: number, data: UpdateBandaDto) {
    return this.prisma.banda.update({
      where: {id},
      data,
      include:{
        images:true,
      },
    });
  }

  remove(id: number) {
    return this.prisma.banda.delete({
      where: {id},
    });
  }
}
