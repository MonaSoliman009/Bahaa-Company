import { Product } from "./product";

export class PurchaseInvoise {
  purchaseNumber: number;
  supplier: string;

  products: Array<Product>;
  seller: string;
}
