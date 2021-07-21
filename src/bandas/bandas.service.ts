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
    return `This action returns a #${id} banda`;
  }

  update(id: number, updateBandaDto: UpdateBandaDto) {
    return `This action updates a #${id} banda`;
  }

  remove(id: number) {
    return `This action removes a #${id} banda`;
  }
}
