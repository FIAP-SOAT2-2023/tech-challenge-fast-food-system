export interface Payment {
  id: string;
  qrCode: string;
  NSU: string;
  status: string;
  paidAt: Date;
  totalPrice: number;
}
