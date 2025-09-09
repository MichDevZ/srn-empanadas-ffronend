import { Empanada } from '../../domain/entities/empanada';

export interface IEmpanadaRepository {
  findAll(): Promise<Empanada[]>;
  create(empanada: Empanada): Promise<Empanada>;
  update(id: number, empanada: Partial<Empanada>): Promise<Empanada>;
  delete(id: number): Promise<void>;
}