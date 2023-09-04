export interface Payment {
  qrCode?: string;
  nsu?: string;
  status?: string;
  paidAt?: Date;
  totalPrice?: number;
}
