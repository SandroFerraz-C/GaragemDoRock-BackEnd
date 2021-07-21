import { Module } from '@nestjs/common';
import { BandasService } from './bandas.service';
import { BandasController } from './bandas.controller';
import { PrismaService } from '../prisma/prisma.service';
 

@Module({
  controllers: [BandasController],
  providers: [BandasService, PrismaService]
})
export class BandasModule {}
