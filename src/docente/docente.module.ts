import { Module } from '@nestjs/common';
import { DocenteController } from './docente.controller';

@Module({
  controllers: [DocenteController]
})
export class DocenteModule {}
