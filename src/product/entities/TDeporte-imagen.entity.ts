import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import{TDeporte}from './TDeporte.entity';


@Entity()
export class TDeporteImage{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    url: string;
    @ManyToOne(
        ()=> TDeporte,
        (tdeporte)=>tdeporte.images
    )

    tdeporte: TDeporte;
}