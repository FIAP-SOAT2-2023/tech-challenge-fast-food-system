
import { Op, Sequelize } from "sequelize";
import OrderModel from "infra/persistence/models/orderModel";
import BasketModel from "infra/persistence/models/basketsModel";
import PaymentModel from "infra/persistence/models/paymentModel";
import BasketsModel from "infra/persistence/models/basketsModel";
import ItemModel from "infra/persistence/models/itemModel";
import { Order } from "core/domain/entities/order";
import { IOrderRepository } from "core/domain/repositories/orderRepository";
import StatusModel from "../models/statusModel";
import OrderStatusKey from "framework/enum/orderStatus";

export class OrderRepository implements IOrderRepository {

    async createOrder(orderNew: Order): Promise<Order>{

        return new Promise<Order> (async (resolve) =>  {

            const { basket, payment } = orderNew;

            const basketModel = await BasketModel.findOne({where: { uuid: basket?.uuid}});
            const paymentModel = await PaymentModel.findOne({where: { nsu: payment?.nsu }})
            const statusModel = await StatusModel.findOne({where: { key: OrderStatusKey.RECEIVED }})

            let orderCreated = await OrderModel.create({
                statusId: statusModel?.id,
                basketId: basketModel?.id,
                paymentId: paymentModel?.id,
                expected: orderNew.expected,
            })

            const {uuid, expected, createdAt} = orderCreated;

            const orderResult = {
                ...orderNew, uuid, expected, createdAt
            }

            resolve(orderResult)
        })
    }

    async getAllPendingOrders(): Promise<Order[]> {
        return new Promise<Order[]>(async (resolve, reject) => {
            const listOrdersFromDatabase = await OrderModel.findAll({
                where: {},
                include: [
                    {
                        model: StatusModel,
                        where: {
                            key: {
                                [Op.or]: [OrderStatusKey.RECEIVED, OrderStatusKey.PREPARATION]
                            }
                        }
                    }
                ]
            });

            let orderList: Order[] = [];
            for (const orderFromDatabase of listOrdersFromDatabase)
            {
                const basket = await BasketsModel.findOne({where: {
                        id: orderFromDatabase.basketId
                    }})

                const status = await StatusModel.findOne({
                    where: {
                        id: orderFromDatabase.statusId
                    }
                })

                if (basket != null)
                    basket.items = await ItemModel.findAll({where: {
                            basketId: basket?.id
                        }})

                const order: Order = {
                    createdAt: orderFromDatabase.createdAt,
                    uuid: orderFromDatabase.uuid,
                    status: {
                        key: status?.key as string,
                        name: status?.name as string,
                    },
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

    async getAllOrder(): Promise<Order[]> {
        return new Promise<Order[]>(async (resolve, reject) => {
            const orders = await OrderModel.findAll({
                include: [
                    {
                        model: StatusModel,
                        where: {
                            key: {
                                [Op.not]: OrderStatusKey.DONE
                            }
                        }
                    }
                ],
                order: [
                    [
                        Sequelize.fn(
                            "FIELD",
                            Sequelize.col("status.key"),
                            OrderStatusKey.READY,
                            OrderStatusKey.PREPARATION,
                            OrderStatusKey.RECEIVED
                        ),
                        "ASC"
                    ],
                    ["createdAt", "DESC"]
                ]
            });

            let orderList: Order[] = [];
            for (const order of orders)
            {
                const status = await StatusModel.findOne({
                    where: {
                        id: order.statusId
                    }
                })

                orderList.push({
                    uuid: order.uuid,
                    status: {
                        key: status?.key as string,
                        name: status?.name as string,
                    },
                    doneAt: order.doneAt,
                    expected: order.expected,
                    createdAt: order.createdAt,
                })
            }

            return resolve(orderList)
        });
    }
}
