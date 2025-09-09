import { CreateEmpanadaUseCase } from './create.empanada.use-case';
import { Empanada } from 'src/domain/entities/empanada';

describe('CreateEmpanadaUseCase', () => {
  let useCase: CreateEmpanadaUseCase;
  let repoMock: any;

  beforeEach(() => {
    repoMock = {
      create: jest.fn()
    };
    useCase = new CreateEmpanadaUseCase(repoMock);
  });

  it('should create an empanada and call the repository', async () => {
    const returnedEmpanada = new Empanada(1, 'Pino', 'Horno', 'Relleno', 1000);
    repoMock.create.mockResolvedValue(returnedEmpanada);

    const result = await useCase.execute('Pino', 'Horno', 1000, 'Relleno');

    expect(repoMock.create).toHaveBeenCalledTimes(1);
    expect(repoMock.create).toHaveBeenCalledWith(expect.any(Empanada));

    const calledEmpanada = repoMock.create.mock.calls[0][0];
    expect(calledEmpanada.name).toBe('Pino');
    expect(calledEmpanada.type).toBe('Horno');
    expect(calledEmpanada.filling).toBe('Relleno');
    expect(calledEmpanada.price).toBe(1000);
    expect(result).toBe(returnedEmpanada);
  });

  it('should handle optional filling as null if not provided', async () => {
    const returnedEmpanada = new Empanada(1, 'Queso', 'Frita', null, 1200);
    repoMock.create.mockResolvedValue(returnedEmpanada);

    const result = await useCase.execute('Queso', 'Frita', 1200);

    const calledEmpanada = repoMock.create.mock.calls[0][0];
    expect(calledEmpanada.filling).toBeNull();
    expect(result).toBe(returnedEmpanada);
  });
})