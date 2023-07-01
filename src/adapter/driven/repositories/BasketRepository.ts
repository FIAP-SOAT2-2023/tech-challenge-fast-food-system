import ItemModel from "infra/models/itemModel";
import { IBasketRepository } from "../../../core/applications/ports/out/BasketRepository";
import { Basket } from "../../../core/domain/basket";
import BasketModel from "../../../infra/models/basketsModel";
import {v4 as uuidv4} from 'uuid';
import Product from "infra/models/productModel";
import PaymentModel from "infra/models/paymentModel";
import { Payment } from "core/domain/payment";
import CustomerModel from "infra/models/customerModel";

export class BasketRepository implements IBasketRepository {
    
    addBasket(body: Basket): Promise<Basket> {
      
        return  new Promise<Basket>( async (resolve, reject ) =>  {


            const customer = await CustomerModel.findOne({
                where: {
                    uuid: body.customerId
                }
            })

            if (customer == null) {

                reject(new Error("Usuario não cadastrado"))

                return
            }

            const {customerId, ...basketValuePending} = body;

             // Payment

             let paymentCreated: PaymentModel = await PaymentModel.create(body.payment);


            // BASKET
            let basketModel = await BasketModel.create({
                ...basketValuePending,
                uuid: uuidv4(),
                customerId: customer.id,
                paymentId: paymentCreated.id
            })

           // basketModel.addCustomer(customer)

            // ITEMS
            const { items } = body

            body.items?.forEach(async (itemRequest) => {

              
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

                basketModel.addItem(itemModel)
              
            })


           

          //  basketModel.createPayment(paymentCreated);


            const {id, ...basketValues } = basketModel.dataValues

            const {id:idPayment, createdAt, updatedAt, ...paymentValues} =  paymentCreated.dataValues

            let basketResult: Basket = {
                ...basketValues,
                customerId: body.customerId,
                items,
                payment: {
                   ...paymentValues
                    
                }
                
            }


            resolve(basketResult)
        
        })
    }

}