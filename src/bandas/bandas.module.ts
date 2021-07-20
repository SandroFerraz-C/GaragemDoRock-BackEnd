import { Module } from '@nestjs/common';
import { BandasService } from './bandas.service';
import { BandasController } from './bandas.controller';

@Module({
  controllers: [BandasController],
  providers: [BandasService]
})
export class BandasModule {}
