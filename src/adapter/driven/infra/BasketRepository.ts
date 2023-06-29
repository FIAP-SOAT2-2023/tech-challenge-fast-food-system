import { IBasketRepository } from "../../../core/applications/ports/out/BasketRepository";
import { Basket } from "../../../core/domain/basket";
import BasketModel from "../../../infra/models/basketsModel";


export class BasketRepository implements IBasketRepository {
    
    addBasket(body: Basket): Promise<Basket> {
      
        return  new Promise<Basket>( async (resolve) =>  {

            let basketModel = await BasketModel.create({
                ...body
            })
            
            let basketResult: Basket = {
                ...basketModel.dataValues,
                customer: undefined,
            }

            resolve(basketResult)
        
        })
    }

}