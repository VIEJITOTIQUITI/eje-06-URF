import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('materias')
export class MateriasController {
	@Get()
	findAll() {
		return [
			{ id: 1, name: 'Matemáticas', codigo: 'MAT101' },
			{ id: 2, name: 'Historia', codigo: 'HIS201' },
			{ id: 3, name: 'Biología', codigo: 'BIO301' },
		];
	}

	@Get(':id')
	findOne(@Param('id') id: string){
		return { id };
	}

	@Post()
	create(@Body() materia: {}) {
		return materia;
	}
    
	@Put(':id')
	update(@Param('id') id: string, @Body() updatemateria: {}) {
		return updatemateria;
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return { id };
	}
}
