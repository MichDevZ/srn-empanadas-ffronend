export interface EmpanadaRow {
  id: number;
  name: string;
  type: string;
  filling: string | null;
  price: number | null;
  is_sold_out: boolean;
  created_at: Date;
  updated_at: Date;
}