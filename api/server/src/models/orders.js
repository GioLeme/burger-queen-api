'use strict';
module.exports = (sequelize, DataTypes) => {
  const Orders = sequelize.define('Orders', {
    client_name: DataTypes.STRING,
    table: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {});
  Orders.associate = function(models) {
    Orders.hasMany(models.OrderItems)
  };
  return Orders;
};