
import { Empanada } from 'src/domain/entities/empanada';
import { FindAllEmpanadaUseCase } from './findAll.Empanadas.use-case';

describe('FindAllEmpanadaUseCase', () => {
  let useCase: FindAllEmpanadaUseCase;
  let repoMock: any;

  beforeEach(() => {
    repoMock = {
      findAll: jest.fn()
    };
    useCase = new FindAllEmpanadaUseCase(repoMock);
  });

  it('should call findAll on the repository and return empanadas', async () => {
    const empanadasList = [
      new Empanada(1, 'Pino', 'Horno', 'Relleno', 1000),
      new Empanada(2, 'Queso', 'Frita', null, 1200),
    ];
    repoMock.findAll.mockResolvedValue(empanadasList);

    const result = await useCase.execute();

    expect(repoMock.findAll).toHaveBeenCalledTimes(1);

    expect(result).toBe(empanadasList);
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe('Pino');
    expect(result[1].filling).toBeNull();
  });
});