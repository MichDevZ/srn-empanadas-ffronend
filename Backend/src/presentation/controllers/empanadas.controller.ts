import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CreateEmpanadaUseCase } from 'src/application/use-cases/create.empanada.use-case';
import { FindAllEmpanadaUseCase } from '../../application/use-cases/findAll.Empanadas.use-case';
import { UpdateEmpanadaUseCase } from 'src/application/use-cases/update.empanada.use-case';
import { DeleteEmpanadaUseCase } from 'src/application/use-cases/delete.empanada.use-case';
import { Empanada } from 'src/domain/entities/empanada';
import { CreateEmpanadaDto } from '../DTO/empanada.dto';


@Controller('api')
export class EmpanadasController {
  constructor(
    private readonly createUseCase: CreateEmpanadaUseCase,
    private readonly getAllUseCase: FindAllEmpanadaUseCase,
    private readonly updateUseCase: UpdateEmpanadaUseCase,
    private readonly deleteUseCase: DeleteEmpanadaUseCase,
  ) {}

  @Get('empanadas')
  async findAll(): Promise<Empanada[]> {
    return this.getAllUseCase.execute();
  }

  @Post('empanada')
  async create(@Body() empanada: CreateEmpanadaDto): Promise<Empanada> {
   const {name, filling, price, type} = empanada
    return this.createUseCase.execute(name, type, price, filling );
  }

  @Put('empanada/:id')
  async update(
    @Param('id') id: string,
    @Body() empanada: Empanada,
  ): Promise<Empanada> {
    return this.updateUseCase.execute(+id, empanada);
  }

  @Delete('empanada/:id')
  async delete(@Param('id') id: number): Promise<void> {
    return this.deleteUseCase.execute(id);
  }
}