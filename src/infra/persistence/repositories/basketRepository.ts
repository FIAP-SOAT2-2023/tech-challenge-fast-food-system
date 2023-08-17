import ItemModel from "infra/persistence/models/itemModel";
import BasketModel from "infra/persistence/models/basketsModel";
import ProductModel from "infra/persistence/models/productModel";
import CustomerModel from "infra/persistence/models/customerModel";
import {v4 as uuidv4} from 'uuid';
import { Basket } from "core/domain/entities/basket";
import { IBasketRepository } from "core/domain/repositories/basketRepository";

export class BasketRepository implements IBasketRepository {

  createBasket(basketNew: Basket): Promise<Basket> {

    return new Promise<Basket>(async (resolve, reject) => {

      const {customer, isTakeOut, totalPrice} = basketNew;

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
      const {items} = basketNew

      for (const itemRequest of items) {
        const product = await ProductModel.findOne({
          where: {
            uuid: itemRequest.productId
          }
        })

        if (product == null) {
          reject(new Error())
          continue;
        }

        let itemModel = await ItemModel.create({...itemRequest, productId: product.id});

        await basketCreated.addItem(itemModel)
      }

      const {id, customerId, ...basketValues} = basketCreated.dataValues

      const {id: idPayment, createdAt, updatedAt, uuid,  ...paymentValues} = basketCreated.dataValues

      let basketResult: Basket = {
        ...basketValues,
        paymentId: uuid,
        items,

      }
      resolve(basketResult)
    })
  }

}