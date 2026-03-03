import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const alumnos = [
      { id: 1, name: 'Juan', email: 'juan@example.com' },
      { id: 2, name: 'María', email: 'maria@example.com' },
      { id: 3, name: 'Pedro', email: 'pedro@example.com' },
    ];
    const docentes = [
      { id: 1, name: 'Ana', email: 'ana@universidad.com' },
      { id: 2, name: 'Luis', email: 'luis@universidad.com' },
      { id: 3, name: 'Sofía', email: 'sofia@universidad.com' },
    ];
    const materias = [
      { id: 1, name: 'Matemáticas', codigo: 'MAT101' },
      { id: 2, name: 'Historia', codigo: 'HIS201' },
      { id: 3, name: 'Biología', codigo: 'BIO301' },
    ];

    return (
      'Docentes: ' + docentes.map(d => d.name).join(', ') + '\n' +
      'Alumnos: ' + alumnos.map(a => a.name).join(', ') + '\n' +
      'Materias: ' + materias.map(m => m.name).join(', ')
    );
  }
}
