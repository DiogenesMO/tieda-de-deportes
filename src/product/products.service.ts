import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTDeporteDto } from './dto/TDeporte.dto';
import { TDeporte } from './entities/TDeporte.entity';
import { TDeporteImage } from './entities/TDeporte-imagen.entity';

@Injectable()
export class TDeporteService {
  constructor(
    @InjectRepository(TDeporte)
    private readonly tdeporteRepository: Repository<TDeporte>,
    @InjectRepository(TDeporteImage)
    private readonly imageRepository: Repository<TDeporteImage>,

  ) {}

  async create(tdeporteDto: CreateTDeporteDto){
    const {images =[], ...detalleTDeporte}= tdeporteDto;
    const tdeporte=await this.tdeporteRepository.create({
      ...detalleTDeporte,
      images:images.map((images)=>this.imageRepository.create({url:images})),
    });
    await this.tdeporteRepository.save(tdeporte);
    return tdeporte;
  }

  //Metodo para visualizar todos los productos
  findAll() {
    return this.tdeporteRepository.find();
  }

  //Metodo para visualizar un producto especifico
  findOne(id: string) {
    return this.tdeporteRepository.findOneBy({ id });
  }

  //Remover un producto especifico
  async remove(id: string) {
    const tdeporte = await this.findOne(id);
    await this.tdeporteRepository.remove(tdeporte);
    return 'Producto de Tienda Deporte, eliminado satisfactoriamente';
  }

  async update(id: string, cambios:CreateTDeporteDto){
    const tdeporte = await this.tdeporteRepository.preload({
      id:id,
      ...cambios,
      images:[],
    });
    await this.tdeporteRepository.save(tdeporte);
    return tdeporte;
  }
}
