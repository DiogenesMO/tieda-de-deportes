import {Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post} from '@nestjs/common';
  import { TDeporteService } from './products.service';
  import { CreateTDeporteDto } from './dto/TDeporte.dto';
  
  @Controller('tdeporte')
  export class TDeporteController {
    constructor(private readonly tdeporteServiceRepo: TDeporteService) {}
  
    //Metodo para crear un producto
    @Post()
    create(@Body() tdeporteDto: CreateTDeporteDto) {
      return this.tdeporteServiceRepo.create(tdeporteDto);
    }
  
    //Metodo para mostrar todos los productos
    @Get()
    findAll() {
      return this.tdeporteServiceRepo.findAll();
    }
  
    //Metodo para mostrar un producto especifico
    @Get(':id')
    findOne(@Param('id', ParseUUIDPipe) id: string) {
      return this.tdeporteServiceRepo.findOne(id);
    }
  
    //Eliminar un producto especifico
    @Delete(':id')
    remove(@Param('id', ParseUUIDPipe) id: string) {
      return this.tdeporteServiceRepo.remove(id);
    }
  
    //Crear método patch, para actualizar
    @Patch(':id')
    update(
      @Param('id', ParseUUIDPipe) id: string,
      @Body() updateTDeporteDto: CreateTDeporteDto,
    ){
      return this.tdeporteServiceRepo.update(id, updateTDeporteDto);
    }
  }
  