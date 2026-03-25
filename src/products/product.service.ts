import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import product from '../../data/products.json';
import { ApiResponse } from '../interfaces/response.interface';

@Injectable()
export class ProductService {
  findAll(): ApiResponse<Product[]> {
    const p = [product[0], product[1]];

    return {
      success: true,
      data: p,
      message: 'Fetched products successfully',
    };
  }
}
