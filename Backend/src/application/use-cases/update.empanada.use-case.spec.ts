import { UpdateEmpanadaUseCase } from './update.empanada.use-case';
import { Empanada } from 'src/domain/entities/empanada';

describe('UpdateEmpanadaUseCase', () => {
  let useCase: UpdateEmpanadaUseCase;
  let repoMock: any;

  beforeEach(() => {
    repoMock = {
      update: jest.fn(),
    };
    useCase = new UpdateEmpanadaUseCase(repoMock);
  });

  it('should call update on the repository with correct parameters', async () => {
    // Arrange
    const id = 1;
    const empanadaData = new Empanada(id, 'Pino', 'Horno', 'Relleno', 1000);
    const updatedEmpanada = new Empanada(id, 'Pino', 'Horno', 'Relleno', 1100);
    repoMock.update.mockResolvedValue(updatedEmpanada);

    // Act
    const result = await useCase.execute(id, empanadaData);

    // Assert
    expect(repoMock.update).toHaveBeenCalledTimes(1);
    expect(repoMock.update).toHaveBeenCalledWith(id, empanadaData);
    expect(result).toBe(updatedEmpanada);
  });
});