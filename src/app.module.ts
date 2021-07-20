import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BandasModule } from './bandas/bandas.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [BandasModule],
})
export class AppModule {}
