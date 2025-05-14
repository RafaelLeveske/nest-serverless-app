import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Callback, Context, Handler } from 'aws-lambda';
import { ExpressAdapter } from '@nestjs/platform-express';
import { createServer, proxy } from 'aws-serverless-express';
import * as express from 'express';

let cachedServer;

async function bootstrapServer() {
  if (!cachedServer) {
    const expressApp = express();
    const adapter = new ExpressAdapter(expressApp);
    const app = await NestFactory.create(AppModule, adapter);
    await app.init();
    cachedServer = createServer(expressApp);
  }
  return cachedServer;
}

export const createNestApplication = async (): Promise<Handler> => {
  const server = await bootstrapServer();
  return (event: any, context: Context, callback: Callback) => {
    return proxy(server, event, context);
  };
};
