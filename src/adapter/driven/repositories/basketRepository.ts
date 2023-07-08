import ItemModel from "infra/models/itemModel";
import {IBasketRepository} from "core/applications/ports/out/basketRepository";
import {Basket} from "core/domain/basket";
import BasketModel from "infra/models/basketsModel";
import Product from "infra/models/productModel";
import CustomerModel from "infra/models/customerModel";
import {v4 as uuidv4} from 'uuid';
import {Order} from "core/domain/order";
import OrderModel from "infra/models/orderModel";
import BasketsModel from "infra/models/basketsModel";

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
        const product = await Product.findOne({
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