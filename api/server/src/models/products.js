'use strict';
module.exports = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    extras: DataTypes.BOOLEAN,
    options: DataTypes.BOOLEAN
  }, {});
  Products.associate = function(models) {
    Products.hasMany(models.OrderItems) 
  };
  return Products;
};
