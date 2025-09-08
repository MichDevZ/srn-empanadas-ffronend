import { Injectable } from '@nestjs/common';
import { IEmpanadaRepository } from '../repositories/empanada.repository';
import { Empanada } from 'src/domain/entities/empanada';


@Injectable()
export class FindAllEmpanadaUseCase {
  constructor(private readonly repo: IEmpanadaRepository) {}

  async execute(): Promise<Empanada[]> {
    return this.repo.findAll();
  }
}
