import ItemModel from "infra/persistence/models/itemModel";
import BasketModel from "infra/persistence/models/basketsModel";

import { v4 as uuidv4 } from "uuid";
import { Basket } from "core/domain/entities/basket";
import { IBasketRepository } from "core/domain/repositories/basketRepository";
import { Customer } from "core/domain/entities/customer";

export class BasketRepository implements IBasketRepository {
  createBasket(basketNew: Basket): Promise<Basket> {
    return new Promise<Basket>(async (resolve, reject) => {
      const { isTakeOut, totalPrice, customer } = basketNew;

      // BASKET
      let basketCreated = await BasketModel.create({
        isTakeOut,
        totalPrice,
        uuid: uuidv4(),
        customerId: customer
          .map((response: Customer) => {
            return response.uuid;
          })
          .toString(),
      });

      // ITEMS
      const { items } = basketNew;

      for (const itemRequest of items) {
        if (itemRequest.unitPrice !== undefined) {
          let itemModel = await ItemModel.create({
            productId: itemRequest.productId,
            unitPrice: itemRequest.unitPrice,
            quantity: itemRequest.quantity,
          });

          await basketCreated.addItem(itemModel);
        }
      }
      const { id, customerId, ...basketValues } = basketCreated.dataValues;

      const {
        id: idPayment,
        createdAt,
        updatedAt,
        uuid,
        ...paymentValues
      } = basketCreated.dataValues;

      let basketResult: Basket = {
        ...basketValues,
        items,
      };
      resolve(basketResult);
    });
  }
}
