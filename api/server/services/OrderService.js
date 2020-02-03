import database from "../src/models";

class OrderService {
  static async getAllOrders() {
    try {
      return await database.Orders.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addOrder(newOrder) {
    try {
      return await database.Orders.create(newOrder)
    } catch (error) {
      throw error
    }
  }

  static async updateOrder(id, updateOrder) {
    try {
      const OrderToUpdate = await database.Orders.findOne({
        where: { id: Number(id) }
      })

      if (OrderToUpdate) {
        await database.Orders.update(updateOrder, { where: { id: Number(id) } })

        return updateOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getOrder(id) {
    try {
      const theOrder = await database.Orders.findOne({
        where: { id: Number(id) }
      })

      return theOrder
    } catch (error) {
      throw error
    }
  }

  static async deleteOrder(id) {
    try {
      const OrderToDelete = await database.Orders.findOne({ where: { id: Number(id) } })

      if (OrderToDelete) {
        const deletedOrder = await database.Orders.destroy({
          where: { id: Number(id) }
        })
        return deletedOrder
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default OrderService


