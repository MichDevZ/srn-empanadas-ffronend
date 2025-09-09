export class Empanada {
  constructor(
    public id: number = 0,
    public name: string,
    public type: string,
    public filling: string | null = null,
    public price: number, 
    public isSoldOut: boolean = false,
    public readonly createdAt: Date = new Date(),
    public readonly updatedAt: Date = new Date()
  ) {
    if (!name) throw new Error('Name Required');
    if (!type) throw new Error('Type required');
    if (!price) throw new Error('Type required');
  }
}