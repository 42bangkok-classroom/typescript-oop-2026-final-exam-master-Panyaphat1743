import { Injectable } from '@nestjs/common';
import { Purchase } from './purchase.interface';
import purchase from '../../data/purchases.json';
import { ApiResponse } from '../interfaces/response.interface';

@Injectable()
export class PurchaseService {
  findAll(): ApiResponse<Purchase[]> {
    return {
      success: true,
      data: purchase,
      message: 'Fetched products successfully',
    };
  }
}
