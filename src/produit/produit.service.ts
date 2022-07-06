import { HttpException, HttpStatus, Injectable} from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ProduitEntity } from "./entities/produit.entity";
import { CreateProduitDto } from "./dto/create-produit.dto";
import { UpdateProduitDto } from "./dto/update-produit.dto";

@Injectable()
/*We add five methods in our service,*/
export class ProduitService {
  constructor(@InjectRepository(ProduitEntity)
  private produitRepository: Repository<ProduitEntity>) {}
  
  async findOneProduct(id: number) {
    const produit = await this.produitRepository.findOneBy({ id });
    if (produit) {
      return produit;
    }
    throw new HttpException(`Cet utilisateur n'existe pas`, HttpStatus.NOT_FOUND);
  }
 
  async create(produitdto: CreateProduitDto) : Promise<ProduitEntity>{
    return this.produitRepository.save(produitdto);
  }

  async findAll(): Promise<ProduitEntity[]>{
    return this.produitRepository.find();
  }

  update(id: number, updateproduitDto: UpdateProduitDto): Promise<ProduitEntity>{
    const updateproduit = this.findOneProduct(id)
    return updateproduit;
  }

  delete(id: number) : Promise<ProduitEntity> {
    const deleteproduit = this.findOneProduct(id)
    return deleteproduit;
  }
}