import { IsNotEmpty, IsString } from "class-validator";

export class CreateProduitDto {

    @IsString()
    @IsNotEmpty()
    nomproduit : string;


}
