import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateBandaDto } from './dto/create-banda.dto';
import { UpdateBandaDto } from './dto/update-banda.dto';

@Injectable()
export class BandasService {
  constructor(private readonly prisma: PrismaService){}

  create(data: CreateBandaDto) {
    return this.prisma.banda.create({data});
  }

  findAll() {
    return this.prisma.banda.findMany();
  }

  findOne(id: number) {
    return this.prisma.banda.findUnique({
      where: {id},
    });
  }

  update(id: number, data: UpdateBandaDto) {
    return this.prisma.banda.update({
      where: {id},
      data,
    });
  }

  remove(id: number) {
    return this.prisma.banda.delete({
      where: {id},
    });
  }
}
