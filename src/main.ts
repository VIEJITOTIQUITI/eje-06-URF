import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('Docente: Ana, Luis, Sofía');
  console.log('Alumno: Juan, María, Pedro');
  console.log('Materia: Matemáticas, Historia, Biología');
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
