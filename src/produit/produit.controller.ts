import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { ProduitService } from './produit.service';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { ProduitEntity } from './entities/produit.entity';

@Controller('produit')
export class ProduitController {
  constructor(private readonly produitService: ProduitService) {}

  @Post()
  create(@Body() createProduitDto: CreateProduitDto) {
    return this.produitService.create(createProduitDto);
  }

  @Get()
  findAll(): Promise<ProduitEntity[]> {
    return this.produitService.findAll();
  }

  @Get(':id')
  Trouveunproduit(@Param('id') id) {
    return this.produitService.findOneProduct(id);
  }

  @Put(':id')
  ModifierProduit(@Param('id') id: number, @Body() updateProduitDto: UpdateProduitDto) {
    return this.produitService.update(id, updateProduitDto);
  }

  @Delete(':id')
  SupprimerProduit(@Param('id', ParseIntPipe) id: number) {
    return this.produitService.delete(id);
  }
}
