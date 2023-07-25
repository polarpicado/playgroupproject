import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCreate.css';
import { useNavigate, useParams } from 'react-router-dom';

const ProductEdit = () => {
  const { id: productId } = useParams(); // Usa useParams para obtener el id del producto

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    image: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    // Obtener los detalles del producto desde el servidor
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then((response) => setProductData(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

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

    axios.put(`http://localhost:5000/api/products/${productId}`, productData)
      .then((response) => {
        console.log('Producto actualizado:', response.data);
        navigate(`/`); 
      })
      .catch((error) => {
        console.log('Error al actualizar el producto:', error);
      });
  };

  return (
    <div className="product-create-container">
      <h1>Editar Producto ✏️</h1>
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
          <button type="button" onClick={handleSubmit}>Guardar</button> 
        </form>
      </div>
    </div>
  );
};

export default ProductEdit;
