import OrderItemService from '../services/OrderItemService'
import Util from '../utils/Utils'

const util = new Util()

class OrderItemController {
  static async getAllOrderItems(req, res) {
    try {
      const allOrderItems = await OrderItemService.getAllOrderItems()
      if (allOrderItems.length > 0) {
        util.setSuccess(200, 'OrderItems retrieved', allOrderItems)
      } else {
        util.setSuccess(200, 'No OrderItem found')
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }

  static async addOrderItem(req, res) {
    if (!req.body.productId || !req.body.orderId || !req.body.quantity) {
      util.setError(400, 'Please provide complete details')
      return util.send(res)
    }
    const newOrderItem = req.body
    try {
      const createdOrderItem = await OrderItemService.addOrderItem(newOrderItem)
      util.setSuccess(201, 'OrderItem Added!', createdOrderItem)
      return util.send(res)
    } catch (error) {
      util.setError(400, error.message)
      return util.send(res)
    }
  }

  static async updatedOrderItem(req, res) {
    const alteredOrderItem = req.body
    const { id } = req.params
    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }
    try {
      const updateOrderItem = await OrderItemService.updateOrderItem(id, alteredOrderItem)
      if (!updateOrderItem) {
        util.setError(404, `Cannot find OrderItem with the id: ${id}`)
      } else {
        util.setSuccess(200, 'OrderItem updated', updateOrderItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async getOrderItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please input a valid numeric value')
      return util.send(res)
    }

    try {
      const theOrderItem = await OrderItemService.getOrderItem(id)

      if (!theOrderItem) {
        util.setError(404, `Cannot find OrderItem with the id ${id}`)
      } else {
        util.setSuccess(200, 'Found OrderItem', theOrderItem)
      }
      return util.send(res)
    } catch (error) {
      util.setError(404, error)
      return util.send(res)
    }
  }

  static async deleteOrderItem(req, res) {
    const { id } = req.params

    if (!Number(id)) {
      util.setError(400, 'Please provide a numeric value')
      return util.send(res)
    }

    try {
      const OrderItemToDelete = await OrderItemService.deleteOrderItem(id)

      if (OrderItemToDelete) {
        util.setSuccess(200, 'OrderItem deleted')
      } else {
        util.setError(404, `OrderItem with the id ${id} cannot be found`)
      }
      return util.send(res)
    } catch (error) {
      util.setError(400, error)
      return util.send(res)
    }
  }
}
export default OrderItemController
