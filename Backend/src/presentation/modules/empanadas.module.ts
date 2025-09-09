import { Module } from '@nestjs/common';
import { EmpanadasController } from '../controllers/empanadas.controller';
import { CreateEmpanadaUseCase } from 'src/application/use-cases/create.empanada.use-case';
import { MySQLEmpanadaRepository } from '../../infrastructure/repositories/mysql-empanada.repository';
import { EMPANADA_REPOSITORY } from 'src/shared/constants/tokens';
import { databaseProvider } from 'src/infrastructure/config/database.config';
import { DeleteEmpanadaUseCase } from 'src/application/use-cases/delete.empanada.use-case';
import { FindAllEmpanadaUseCase } from 'src/application/use-cases/findAll.Empanadas.use-case';
import { UpdateEmpanadaUseCase } from 'src/application/use-cases/update.empanada.use-case';
;

@Module({
  imports: [],
  providers: [
    CreateEmpanadaUseCase, 
    DeleteEmpanadaUseCase,
    FindAllEmpanadaUseCase,
    UpdateEmpanadaUseCase,
    {
    provide: EMPANADA_REPOSITORY,
    useClass: MySQLEmpanadaRepository
  },
  ...databaseProvider ],
  controllers: [EmpanadasController],
})
export class EmpanadasModule {}