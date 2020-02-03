import express from 'express'
import bodyParser from 'body-parser'
import orderRoutes from './server/routes/OrderRoutes';
import productRoutes from './server/routes/ProductRoutes';
import orderItemRoutes from './server/routes/OrderItemRoutes';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000;

app.use('/api/orders', orderRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orderItems', orderItemRoutes);

// quando recebe uma rota não listada
app.get('*', (req, res) => res.status(200).send({
  message: 'Boas-vindas à API!',
}));

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app