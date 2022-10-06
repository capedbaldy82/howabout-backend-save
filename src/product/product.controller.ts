import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('/')
  getAllProducts() {
    return 'all products';
  }

  @Get('/:id')
  getProductById() {
    return 'a product';
  }
}
