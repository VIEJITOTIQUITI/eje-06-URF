import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
@Controller('alumnos')
export class AlumnosController {


    @Get()
    findAll() {
    return [
        { id: 1, name: 'Juan', email: 'juan@example.com' },
        { id: 2, name: 'María', email: 'maria@example.com' },
        { id: 3, name: 'Pedro', email: 'pedro@example.com' },
    ];
    }

    @Get(':id')
    findOne(@Param('id') id: string){
    return { id };
    }

    @Post()
    create(@Body() alumno: {}) {
        return alumno;
    }
    
    @Put(':id')
    update(@Param('id') id: string, @Body() updatealumno: {}) {
        return updatealumno;
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id };
    }
}
