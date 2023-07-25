const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/product');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = 'mongodb+srv://joaobasa18:LoE65B6aTSFDfQNf@cluster0.tncarod.mongodb.net/'; // Cambia esto por tu URL de conexión a MongoDB

app.use(cors());
app.use(express.json());

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Conectado a MongoDB');
  })
  .catch((err) => {
    console.error('Error conectando a Mongo:', err);
  });

const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ${PORT}`);
});
