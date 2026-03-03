import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';

@Controller('docente')
export class DocenteController {
	@Get()
	findAll() {
		return [
			{ id: 1, name: 'Ana', email: 'ana@universidad.com' },
			{ id: 2, name: 'Luis', email: 'luis@universidad.com' },
			{ id: 3, name: 'Sofía', email: 'sofia@universidad.com' },
		];
	}

	@Get(':id')
	findOne(@Param('id') id: string){
		return { id };
	}

	@Post()
	create(@Body() docente: {}) {
		return docente;
	}
    
	@Put(':id')
	update(@Param('id') id: string, @Body() updatedocente: {}) {
		return updatedocente;
	}

	@Delete(':id')
	delete(@Param('id') id: string) {
		return { id };
	}
}
