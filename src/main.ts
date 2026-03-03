import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  console.log('Alumnos:', [
    { id: 1, name: 'Juan', email: 'juan@example.com' },
    { id: 2, name: 'María', email: 'maria@example.com' },
    { id: 3, name: 'Pedro', email: 'pedro@example.com' },
  ]);
  console.log('Docentes:', [
    { id: 1, name: 'Ana', email: 'ana@universidad.com' },
    { id: 2, name: 'Luis', email: 'luis@universidad.com' },
    { id: 3, name: 'Sofía', email: 'sofia@universidad.com' },
  ]);
  console.log('Materias:', [
    { id: 1, name: 'Matemáticas', codigo: 'MAT101' },
    { id: 2, name: 'Historia', codigo: 'HIS201' },
    { id: 3, name: 'Biología', codigo: 'BIO301' },
  ]);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
