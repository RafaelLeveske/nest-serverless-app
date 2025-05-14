import { Module } from '@nestjs/common';
import { OrdersService } from './modules/orders/services/orders.service';

@Module({
  imports: [],
  controllers: [],
  providers: [OrdersService],
})
export class AppModule {}
