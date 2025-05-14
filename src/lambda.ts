import { SQSHandler } from 'aws-lambda';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { OrdersService } from './orders.service';
let appContext;

export const handler: SQSHandler = async (event) => {
  if (!appContext) {
    const app = await NestFactory.createApplicationContext(AppModule);
    appContext = app;
  }

  const service = appContext.get(OrdersService);

  for (const record of event.Records) {
    const body = JSON.parse(record.body);
    await service.handleOrder(body); // cria esse método no service
  }
};
