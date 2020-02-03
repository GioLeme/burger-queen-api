'use strict';
module.exports = (sequelize, DataTypes) => {
  const OrderItems = sequelize.define('OrderItems', {
   productId: DataTypes.INTEGER,
   orderId: DataTypes.INTEGER,
   options: DataTypes.STRING,
   quantity: DataTypes.INTEGER,
   productExtraId: DataTypes.INTEGER,

  }, {});
  OrderItems.associate = function(models) {
    OrderItems.belongsTo(models.Orders, {
      as: 'order',
      foreignKey: 'orderId',
    })
    OrderItems.belongsTo(models.Products, {
      as: 'product',
      foreignKey: 'productId',
    })
    OrderItems.belongsTo(models.Products, {
      as: 'productExtra',
      foreignKey: 'productExtraId',
    })
  };
  return OrderItems;
};