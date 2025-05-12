import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { PrismaService } from '../prisma/prisma.service';
import { Product } from '@prisma/client';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

  create(createProductInput: CreateProductInput) {
    return 'This action adds a new product';
  }

  findAll() {
    return this.prisma.product.findMany();
  }

  findOne(id: string) {
    return this.prisma.product.findUnique({ where: { id } });
  }

  async searchProducts(term: string): Promise<Product[]> {
    const lowerCaseTerm = term.toLowerCase();
    return this.prisma.product.findMany({
      where: {
        OR: [
          {
            name: {
              contains: lowerCaseTerm,
              mode: 'insensitive'
            },
          },
          {
            description: {
              contains: lowerCaseTerm,
              mode: 'insensitive'
            },
          },
        ],
      },
    });
  }

  update(id: string, updateProductInput: UpdateProductInput) {
    return `This action updates a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
