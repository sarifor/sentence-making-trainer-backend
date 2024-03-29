import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import { AppModule } from './app.module';
// require('dotenv').config();
// import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(process.cwd(), '/dist/css')); // Path: http://localhost:4000/styles.css
  app.setBaseViewsDir(join(process.cwd(), '/src/views'));
  app.setViewEngine('pug');
  await app.listen(process.env.PORT || 4000);
}
bootstrap();
