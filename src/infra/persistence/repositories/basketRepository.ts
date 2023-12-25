import ItemModel from "infra/persistence/models/itemModel";
import BasketModel from "infra/persistence/models/basketsModel";

import { v4 as uuidv4 } from "uuid";
import { Basket } from "core/domain/entities/basket";
import { IBasketRepository } from "core/domain/repositories/basketRepository";

export class BasketRepository implements IBasketRepository {
  createBasket(basketNew: Basket): Promise<Basket> {
    return new Promise<Basket>(async (resolve, reject) => {
      const { customerId, isTakeOut, totalPrice } = basketNew;

      // BASKET
      let basketCreated = await BasketModel.create({
        isTakeOut,
        totalPrice,
        uuid: uuidv4(),
        customerId: customerId,
      });

      // ITEMS
      const { items } = basketNew;
      /*
      for (const itemRequest of items) {
        const product = await ProductModel.findOne({
          where: {
            uuid: itemRequest.productId,
          },
        });

        if (product == null) {
          reject(new Error());
          continue;
        }

        let itemModel = await ItemModel.create({
          ...itemRequest,
          productId: product.id,
        });

        await basketCreated.addItem(itemModel);
      }
*/
      const { id, ...basketValues } = basketCreated.dataValues;

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
