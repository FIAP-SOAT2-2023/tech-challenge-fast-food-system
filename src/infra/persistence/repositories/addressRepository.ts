import { injectable } from 'tsyringe';
import {IAddressRepository} from "../../../core/domain/repositories/addressRepository";
import {Address} from "../../../core/domain/entities/address";
import AddressModel from "../models/addressModel";

@injectable()
export class AddressRepository implements IAddressRepository {
  async addAddress(body: Address): Promise<Address> {
    const result = await AddressModel.create({
      ...body
    });
    
    /* TODO: vai quebrar rsrs tem que criar um novo
    objeto informando os bancos que voltaram do banco como uuid e id */

    return body;
  }
}
