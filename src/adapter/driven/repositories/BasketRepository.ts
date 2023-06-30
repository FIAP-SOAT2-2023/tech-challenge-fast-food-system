import ItemModel from "infra/models/itemModel";
import { IBasketRepository } from "../../../core/applications/ports/out/BasketRepository";
import { Basket } from "../../../core/domain/basket";
import BasketModel from "../../../infra/models/basketsModel";
import {v4 as uuidv4} from 'uuid';
import CustomerModel from "infra/models/customerModel";

export class BasketRepository implements IBasketRepository {
    
    addBasket(body: Basket): Promise<Basket> {
      
        return  new Promise<Basket>( async (resolve) =>  {

            // BASKET
            let basketModel = await BasketModel.create({
                ...body,
                uuid: uuidv4(),
                customerId: body.customerId
            })


            // ITEMS
            const { items } = body

            body.items?.forEach(async (itemRequest) => {

                let itemModel = await ItemModel.create({...itemRequest});

                basketModel.addItem(itemModel)
              
            })

            const customer = await CustomerModel.findByPk(1)
        
            //basketModel.addCustomer(customer)


            const {id, ...basketValues } = basketModel.dataValues

            let basketResult: Basket = {
                ...basketValues,
                customerId: body.customerId,
                items
            }


            resolve(basketResult)
        
        })
    }

}