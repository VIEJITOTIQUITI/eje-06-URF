import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MateriasModule } from './materias/materias.module';
import { DocenteModule } from './docente/docente.module';

@Module({
  imports: [AlumnosModule, MateriasModule, DocenteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
