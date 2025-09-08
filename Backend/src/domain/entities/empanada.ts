export class Empanada {
  public id: number;
  public name: string;
  public type: string;
  public filling: string | null;
  public price: number | null;
  public isSoldOut: boolean;
  public createdAt: Date;
  public updatedAt: Date;

  constructor(
    id: number,
    name: string,
    type: string,
    filling: string | null = null,
    price: number | null = null,
    isSoldOut: boolean = false,
    createdAt: Date = new Date(),
    updatedAt: Date = new Date()
  ) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.filling = filling;
    this.price = price;
    this.isSoldOut = isSoldOut;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;


    if (!name.trim()) throw new Error('Name Required');
    if (!type.trim()) throw new Error('Type required');
  }

}