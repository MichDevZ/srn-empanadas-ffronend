import { Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { Empanada } from 'src/domain/entities/empanada';


@Injectable()
export class UpdateEmpanadaUseCase {
  constructor(private readonly repo: IEmpanadaRepository) {}

  async execute(empanadaData: Empanada): Promise<Empanada> {
    return this.repo.update(empanadaData.id, empanadaData);
  }
}
