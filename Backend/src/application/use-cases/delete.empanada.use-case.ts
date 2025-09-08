import { Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { Empanada } from 'src/domain/entities/empanada';


@Injectable()
export class DeleteEmpanadaUseCase {
  constructor(private readonly repo: IEmpanadaRepository) {}

  async execute(empanadaData: Empanada): Promise<void> {
    return this.repo.delete(empanadaData.id);
  }
}
