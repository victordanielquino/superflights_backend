import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from "./common/filters/http-exception.filter";
import { TimeOutInterceptor } from "./common/interceptors/timeout.interceptor";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // CAPTURAMOS ERROR HTTP DE MANERA GLOBAL
  app.useGlobalFilters(new AllExceptionFilter());
  // INTERCEPTAMOS LAS PETICIONES QUE PASEN DE LOS 2 MINUTOS DE MANERA GLOBAL
  app.useGlobalInterceptors(new TimeOutInterceptor());
  // VALIDACION DE DTOS: CLASS VALIDATOR Y CLASS TRANSFORM
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
