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

  async execute(name: string, type: string, price: number ,filling?: string): Promise<Empanada> {
     const empanada = new Empanada(
      undefined,
      name,
      type,
      filling ?? null,
      price,
    );
    return this.repo.create(empanada);
  }
}
