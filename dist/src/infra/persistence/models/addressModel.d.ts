import { Model } from "sequelize";
interface AddressAttributes {
    uuid?: string;
    customerId: string;
    streetName: string;
    number: string;
    neighborhood: string;
    complement: string;
    zipCode: string;
    state: string;
    city: string;
    country: string;
}
declare class AddressModel extends Model<AddressAttributes> implements AddressAttributes {
    uuid: string;
    customerId: string;
    streetName: string;
    number: string;
    neighborhood: string;
    complement: string;
    zipCode: string;
    state: string;
    city: string;
    country: string;
}
export default AddressModel;
