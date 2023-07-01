import { IOrderRepository } from "core/applications/ports/out/orderRepository";
import { Order } from "core/domain/order";
import OrderModel from "infra/models/OrderModel";
import BasketModel from "infra/models/basketsModel";
import PaymentModel from "infra/models/paymentModel";



export class OrderRepository implements IOrderRepository {

    async createOrder(orderNew: Order): Promise<Order> {


        return new Promise<Order> ( async (resolve) =>  {

            const { basket, payment,  } = orderNew;

            const basketModel = await BasketModel.findOne({where: { uuid: basket?.uuid}});
            const paymentModel = await PaymentModel.findOne({where: {nsu: payment.nsu}})

            const orderCreated = await OrderModel.create({
                basketId: basketModel?.id,
                paymentId: paymentModel?.id,
                status: orderNew.status
            })
    
            const {uuid, status, expected, createdAt } = orderCreated;
    
            const orderResult = {
                ...orderNew, uuid,status, expected, createdAt
            }

            resolve(orderResult)
    
        })
        

    }

}