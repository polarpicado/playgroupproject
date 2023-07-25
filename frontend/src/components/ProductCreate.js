import React, { useState } from 'react';
import axios from 'axios';
import './ProductCreate.css';
import { useNavigate } from 'react-router-dom';

const ProductCreate = () => {
  const [productData, setProductData] = useState({
    name: '',
    description: '',
    image: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productData.name || !productData.description || !productData.image) {
      alert('Por favor complete todos los campos.');
      return;
    }

    axios.post('http://localhost:5000/api/products', productData)
      .then((response) => {
        console.log('Producto creado:', response.data);
        navigate('/'); 
      })
      .catch((error) => {
        console.log('Error al crear el producto:', error);
      });
  };

  return (
    <div className="product-create-container">
      <h1>Agregar Producto ➕</h1>
      <div className="product-create-card">
        <form>
          <label>Nombre:</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            placeholder="Ingrese el nombre"
          />
          <label>Descripción:</label>
          <input
            type="text"
            name="description"
            value={productData.description}
            onChange={handleChange}
            placeholder="Ingrese la descripción"
          />
          <label>Imagen:</label>
          <input
            type="text"
            name="image"
            value={productData.image}
            onChange={handleChange}
            placeholder="Ingrese la URL de la imagen"
          />
          <button type="button" onClick={handleSubmit}>Agregar</button>
        </form>
      </div>
    </div>
  );
};

export default ProductCreate;
