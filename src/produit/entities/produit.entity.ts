import { Column, PrimaryGeneratedColumn } from "typeorm";

export class ProduitEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    nomproduit : string;
}
