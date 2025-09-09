import { Inject, Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { Empanada } from 'src/domain/entities/empanada';
import { EMPANADA_REPOSITORY } from 'src/shared/constants/tokens';


@Injectable()
export class UpdateEmpanadaUseCase {
  constructor(
     @Inject(EMPANADA_REPOSITORY)
    private readonly repo: IEmpanadaRepository
  ) {}

  async execute(id: number, empanadaData: Empanada): Promise<Empanada> {
    return this.repo.update(id, empanadaData);
  }
}
