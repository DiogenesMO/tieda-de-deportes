import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TDeporteImage } from './TDeporte-imagen.entity';

@Entity()
export class TDeporte {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  article: string;

  @Column({ type: 'text'})
  brand: string;

  @Column({ type: 'text'})
  addres: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'numeric' })
  amount: number;

  //relacion
  @OneToMany(
    ()=> TDeporteImage,
    (tdeporteImage)=>tdeporteImage.tdeporte,
    {cascade:true},

  )
  images?: TDeporteImage[];
}
