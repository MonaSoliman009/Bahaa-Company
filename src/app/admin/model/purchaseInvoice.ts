export class PurchaseInvoise {
  purchaseNumber: number;
  supplier: string;

  Products: Array<{
    serialNumber: string;
    model: string;
    quantity: number;
    price:number
  }>;
  seller: string;
}
