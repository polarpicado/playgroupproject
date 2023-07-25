import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = () => {
    axios.get('http://localhost:5000/api/products')
      .then((response) => setProducts(response.data))
      .catch((error) => console.log(error));
  };

  const handleEdit = (productId) => {
    window.location.href = `/product/${productId}/edit`;
  };

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Lista de Productos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product._id} className="product-item">
            <div className="product-card">
              <img className="product-image" src={product.image} alt={product.name} />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-actions">
                  <button className="edit-button" onClick={() => handleEdit(product._id)}>Editar</button>
                  <button className="delete-button" onClick={() => handleDelete(product._id)}>Eliminar</button>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
