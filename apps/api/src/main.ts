import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const port = Number(process.env.API_PORT) || 3000;
  await app.listen(port, '0.0.0.0');
}
bootstrap();
