
import OrderModel from "infra/persistence/models/orderModel";
import BasketModel from "infra/persistence/models/basketsModel";
import PaymentModel from "infra/persistence/models/paymentModel";
import BasketsModel from "infra/persistence/models/basketsModel";
import ItemModel from "infra/persistence/models/itemModel";
import { Order } from "core/domain/entities/order";
import { IOrderRepository } from "core/domain/repositories/orderRepository";

export class OrderRepository implements IOrderRepository {

    async createOrder(orderNew: Order): Promise<Order>{

        return new Promise<Order> (async (resolve) =>  {

            const { basket, payment } = orderNew;

            const basketModel = await BasketModel.findOne({where: { uuid: basket?.uuid}});
            const paymentModel = await PaymentModel.findOne({where: { nsu: payment?.nsu }})

            const codeNumber = basketModel ? basketModel.id * 2:1
            const codeNew = `ORD-${codeNumber}${paymentModel?.id}`

            let orderCreated = await OrderModel.create({
                status: orderNew.status,
                basketId: basketModel?.id,
                paymentId: paymentModel?.id,
                expected: orderNew.expected,
                code: codeNew
            })

            const {uuid, status, expected, createdAt, code} = orderCreated;

            const orderResult = {
                ...orderNew, uuid, status, expected, createdAt, code
            }

            resolve(orderResult)
        })
    }

    async getAllPendingOrders(): Promise<Order[]> {
        return new Promise<Order[]>(async (resolve, reject) => {
            const listOrdersFromDatabase = await OrderModel.findAll({
                where: {
                    status: "PENDING"
                }
            });

            let orderList: Order[] = [];
            for (const orderFromDatabase of listOrdersFromDatabase)
            {
                const basket = await BasketsModel.findOne({where: {
                        id: orderFromDatabase.basketId
                    }})

                if (basket != null)
                    basket.items = await ItemModel.findAll({where: {
                            basketId: basket?.id
                        }})

                const order: Order = {
                    createdAt: orderFromDatabase.createdAt,
                    uuid: orderFromDatabase.uuid,
                    status: orderFromDatabase.status,
                    doneAt: orderFromDatabase.doneAt,
                    expected: orderFromDatabase.expected,
                    basket: {
                        totalPrice: basket?.totalPrice,
                        isTakeOut: basket?.isTakeOut,
                        items: basket?.items.map(maping => {
                            return {
                                id: maping.id,
                                quantity: maping.quantity,
                                unitPrice: maping.unitPrice,
                                observations: maping.observations,
                                basketId: maping.basketId,
                                productId: maping.productId,
                                createdAt: maping.createdAt,
                                updatedAt: maping.updatedAt,
                            }
                        }) ?? [],
                    }
                }
                orderList.push(order);
            }
            return resolve(orderList)
        });
    }
}