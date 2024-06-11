import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CLIENT_URL } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    credentials: true,
    origin: CLIENT_URL,
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);
}
bootstrap();
