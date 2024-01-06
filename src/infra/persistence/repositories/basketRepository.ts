import ItemModel from "infra/persistence/models/itemModel";
import BasketModel from "infra/persistence/models/basketsModel";

import { v4 as uuidv4 } from "uuid";
import { Basket } from "core/domain/entities/basket";
import { IBasketRepository } from "core/domain/repositories/basketRepository";

export class BasketRepository implements IBasketRepository {
  createBasket(basketNew: Basket): Promise<Basket> {
    return new Promise<Basket>(async (resolve, reject) => {
      const { customer, isTakeOut, totalPrice } = basketNew;

      // BASKET
      let basketCreated = await BasketModel.create({
        isTakeOut,
        totalPrice,
        uuid: uuidv4(),
        customerId: "12",
      });

      // ITEMS
      const { items } = basketNew;

      for (const itemRequest of items) {
        let itemModel = await ItemModel.create({
          ...itemRequest,
          productId: 0,
        });

        await basketCreated.addItem(itemModel);
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
        paymentId: uuid,
        items,
      };
      resolve(basketResult);
    });
  }
}
