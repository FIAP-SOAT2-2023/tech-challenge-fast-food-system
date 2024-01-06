export interface ICustmerRepository {
  getCustomerById(): Promise<string>;
}
