import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from'dotenv';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
  .setTitle('Backend de tienda')
  .setDescription('Este backend documentara los endpoints del proyecto de titulacion')
  .setBasePath('http://localhost:3001')
  .addBearerAuth()
  .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app,documentFactory)
  await app.listen(process.env.PORT ?? 3000);
  console.log(process.env.PORT);
}
bootstrap();
