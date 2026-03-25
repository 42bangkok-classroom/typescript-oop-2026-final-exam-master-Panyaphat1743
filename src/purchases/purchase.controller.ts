import { Controller, Get } from '@nestjs/common';
import { PurchaseService } from './purchase.service';

@Controller()
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get('products')
  getproduct() {
    return this.purchaseService.findAll();
  }
}
