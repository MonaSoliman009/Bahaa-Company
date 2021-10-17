
import { Products } from "./products";

export class SaleInvoice {
  customerName: string;
  price: number;

  Products: Array<Products>;
  seller: string;
}
