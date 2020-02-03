import database from "../src/models";

class ProductService {
  static async getAllProducts() {
    try {
      return await database.Products.findAll();
    } catch (error) {
      throw error;
    }
  }

  static async addProduct(newProduct) {
    try {
      return await database.Products.create(newProduct)
    } catch (error) {
      throw error
    }
  }

  static async updateProduct(id, updateProduct) {
    try {
      const ProductToUpdate = await database.Products.findOne({
        where: { id: Number(id) }
      })

      if (ProductToUpdate) {
        await database.Products.update(updateProduct, { where: { id: Number(id) } })

        return updateProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }

  static async getProduct(id) {
    try {
      const theProduct = await database.Products.findOne({
        where: { id: Number(id) }
      })

      return theProduct
    } catch (error) {
      throw error
    }
  }

  static async deleteProduct(id) {
    try {
      const ProductToDelete = await database.Products.findOne({ where: { id: Number(id) } })

      if (ProductToDelete) {
        const deletedProduct = await database.Products.destroy({
          where: { id: Number(id) }
        })
        return deletedProduct
      }
      return null
    } catch (error) {
      throw error
    }
  }
}

export default ProductService


