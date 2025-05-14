import { SQSHandler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { OrdersService } from '../services/orders.service';
import * as path from 'path';
let appContext;

export const handler: SQSHandler = async (event) => {
  if (!appContext) {
    const { AppModule } = await import(path.resolve(__dirname, '../../../app.module'));
    const app = await NestFactory.createApplicationContext(AppModule);
    appContext = app;
  }

  const service = appContext.get(OrdersService);

  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    await service.handleOrder(body); // cria esse método no service
  }
};
