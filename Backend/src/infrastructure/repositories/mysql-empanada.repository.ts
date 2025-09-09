import mysql from 'mysql2/promise';
import { Empanada } from '../../domain/entities/empanada';
import { IEmpanadaRepository } from 'src/application/repositories/empanada.repository';
import { EmpanadaRow } from '../types/empanada';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class MySQLEmpanadaRepository implements IEmpanadaRepository {
  private pool: mysql.Pool;

  constructor(@Inject('DATABASE_CONNECTION') pool: mysql.Pool) {
    this.pool = pool;
  }

  async findAll(): Promise<Empanada[]> {
    const [rows] = await this.pool.execute('SELECT * FROM empanadas');
    return (rows as EmpanadaRow[]).map(row => new Empanada(
      row.id, row.name, row.type, row.filling, row.price, row.is_sold_out, row.created_at, row.updated_at
    ));
  }

  async create(empanada: Empanada): Promise<Empanada> {
    const [result] = await this.pool.execute(
      'INSERT INTO empanadas (name, type, filling, price, is_sold_out) VALUES (?, ?, ?, ?, ?)',
      [empanada.name, empanada.type, empanada.filling, empanada.price, empanada.isSoldOut]
    );
    const insertId = (result as mysql.RowDataPacket).insertId
    return new Empanada(insertId, empanada.name, empanada.type, empanada.filling, empanada.price, empanada.isSoldOut, empanada.createdAt, empanada.updatedAt);
  }

  async update(id: number, empanada: Empanada): Promise<Empanada> {
    await this.pool.execute(
      'UPDATE empanadas SET name = ?, type = ?, filling = ?, price = ?, is_sold_out = ? WHERE id = ?',
      [empanada.name, empanada.type, empanada.filling, empanada.price, empanada.isSoldOut, id]
    );
    return new Empanada(id, empanada.name, empanada.type, empanada.filling, empanada.price, empanada.isSoldOut, empanada.createdAt, empanada.updatedAt);
  }

  async delete(id: number): Promise<void> {
    await this.pool.execute(
      'DELETE FROM empanadas WHERE id = ?',
      [id]
    );
  }
}