import ItemModel from "infra/models/itemModel";
import { IBasketRepository } from "../../../core/applications/ports/out/BasketRepository";
import { Basket } from "../../../core/domain/basket";
import BasketModel from "../../../infra/models/basketsModel";
import {v4 as uuidv4} from 'uuid';
import Product from "infra/models/productModel";
import CustomerModel from "infra/models/customerModel";
import { where } from "sequelize";

export class BasketRepository implements IBasketRepository {
    
    createBasket(basketNew: Basket): Promise<Basket> {
      
        return  new Promise<Basket>( async (resolve, reject ) =>  {

            const {customer, isTakeOut, totalPrice } = basketNew;

            const customerModel = await CustomerModel.findOne({
                where: {
                  uuid: customer?.uuid,
                },
              });

    
            // BASKET
            let basketCreated = await BasketModel.create({
                isTakeOut, totalPrice,
                uuid: uuidv4(),
                customerId: customerModel?.id
            })

        

            // ITEMS
            const { items } = basketNew

            items?.forEach(async (itemRequest) => {

              
                const product = await Product.findOne({
                    where: {
                      uuid: itemRequest.productId
                    }
                  })
                  /**/

                  if (product == null) {
                    
                    reject(new Error())
                    return
                  }

                let itemModel = await ItemModel.create({...itemRequest, productId: product.id});

                basketCreated.addItem(itemModel)
              
            })

            const {id, ...basketValues } = basketCreated.dataValues

            const {id:idPayment, createdAt, updatedAt, ...paymentValues} =  basketCreated.dataValues

            let basketResult: Basket = {
                ...basketValues,
                items
                }
                
            


            resolve(basketResult)
        
        })
    }

}