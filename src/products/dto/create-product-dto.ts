export class CreateProductDto {
  IdProduct: string;
  readonly NameProduct: string;
  readonly Category: string;
  readonly Description: string;
  readonly ProductQuantity: number;
  readonly Status: boolean;
  TimeStamp: number;
}
