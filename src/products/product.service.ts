import { Injectable } from '@nestjs/common';
import { Product } from './product.interface';
import product from '../../data/products.json';
import { ApiResponse } from '../interfaces/response.interface';

@Injectable()
export class ProductService {
  findAll(): ApiResponse<Product[]> {
    return {
      success: true,
      data: product,
      message: 'Fetched products successfully',
    };
  }
}
