import { Inject, Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { Empanada } from 'src/domain/entities/empanada';
import { EMPANADA_REPOSITORY } from 'src/shared/constants/tokens';


@Injectable()
export class CreateEmpanadaUseCase {
  constructor(
    @Inject(EMPANADA_REPOSITORY)
    private readonly repo: IEmpanadaRepository
  ) {}

  async execute(empanadaData: Empanada): Promise<Empanada> {
    return this.repo.create(empanadaData);
  }
}
