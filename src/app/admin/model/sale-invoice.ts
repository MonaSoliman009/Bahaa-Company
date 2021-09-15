export class SaleInvoice {
  customerName: string;
  price: number;
  date: Date;
  Products: Array<{
    productId: string;
    quantity: number;
    configuration: {
      cpu: string;
      withCharger: boolean;
      ram: Number;
      hard: String;
    };
  }>;
  seller_id: string;
}
