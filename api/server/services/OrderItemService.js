import database from "../src/models";

const orderItemSettings = {
    attributes: [
        'id',
        'quantity',
        'options',
    ],
    include: [
        { 
            model: database.Orders, 
            as: 'order',
            required: true,
            attributes: [
                'id',
                'client_name',
                'table',
                'status',
            ],
        },
        { 
            model: database.Products, 
            as: 'product',
            required: true,
            attributes: [
                'id',
                'name',
                'price',
                'options',
                'extras',
            ],
        },
        { 
            model: database.Products, 
            as: 'productExtra',
            required: false,
            attributes: [
                'id',
                'name',
                'price',
                'options',
                'extras',
            ],
        },
    ],
  }

class OrderItemService {
  static async getAllOrderItems() {
    try {
      return await database.OrderItems.findAll(orderItemSettings);
    } catch (error) {
      throw error;
    }
  }

  static async addOrderItem(newOrderItem) {
    try {
      return await database.OrderItems.create(newOrderItem)
    } catch (error) {
      throw error
    }
  }

  static async updateOrderItem(id, updateOrderItem) {
    try {
      const OrderItemToUpdate = await database.OrderItems.findOne({
        ...orderItemSettings,
        where: { id: Number(id) }
      })

      if (OrderItemToUpdate) {
        await database.OrderItems.update(updateOrderItem, { where: { id: Number(id) } })

        return updateOrderItem
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrderItem(id) {
    try {
      const theOrderItem = await database.OrderItems.findOne({
        ...orderItemSettings,
        where: { id: Number(id) }
      })

      return theOrderItem
    } catch (error) {
      throw error
    }
  }

  static async deleteOrderItem(id) {
    try {
      const OrderItemToDelete = await database.OrderItems.findOne({
            ...orderItemSettings,
            where: { id: Number(id) }
        })

      if (OrderItemToDelete) {
        const deletedOrderItem = await database.OrderItems.destroy({
          where: { id: Number(id) }
        })
        return deletedOrderItem
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default OrderItemService


