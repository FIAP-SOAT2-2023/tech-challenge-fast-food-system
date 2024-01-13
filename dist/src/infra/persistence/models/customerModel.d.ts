import { Model } from "sequelize";
interface CustomerAttributes {
    uuid?: string;
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    cellphone: string;
}
declare class CustomerModel extends Model<CustomerAttributes> implements CustomerAttributes {
    id?: number;
    uuid: string;
    firstName: string;
    lastName: string;
    document: string;
    email: string;
    cellphone: string;
}
export default CustomerModel;
