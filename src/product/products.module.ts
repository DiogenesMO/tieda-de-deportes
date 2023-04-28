import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TDeporte } from './entities/TDeporte.entity';
import { TDeporteController } from './products.controller';
import { TDeporteService } from './products.service';
import { TDeporteImage } from './entities/TDeporte-imagen.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TDeporte, TDeporteImage])],
  controllers: [TDeporteController],
  providers: [TDeporteService],
})
export class TDeporteModule {}
