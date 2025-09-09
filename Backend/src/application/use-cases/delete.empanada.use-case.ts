import { Inject, Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { EMPANADA_REPOSITORY } from 'src/shared/constants/tokens';


@Injectable()
export class DeleteEmpanadaUseCase {
  constructor(
    @Inject(EMPANADA_REPOSITORY)
    private readonly repo: IEmpanadaRepository
) {}

  async execute(id: number): Promise<void> {
    return this.repo.delete(id);
  }
}
