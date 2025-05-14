import { Injectable } from "@nestjs/common";

@Injectable()
export class OrdersService {
  async handleOrder(payload: any) {
    console.log('Processing order payload from SQS:', payload);
    // processa o pedido aqui
  }
}
