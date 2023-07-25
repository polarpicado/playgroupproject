import React, { useState } from 'react';
import axios from 'axios';

const ProductForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, image };
    axios.post('http://localhost:5000/api/products', newProduct)
      .then((response) => {
        setName('');
        setDescription('');
        setImage('');
        onSubmit(response.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h2>Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nombre:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Imagen:</label>
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button type="submit">Agregar</button>
      </form>
    </div>
  );
};

export default ProductForm;
