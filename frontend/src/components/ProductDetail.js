import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetail = ({ match }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${match.params.id}`)
      .then((response) => setProduct(response.data))
      .catch((error) => console.log(error));
  }, [match.params.id]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h1>Detalles del Producto</h1>
      <div>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <img src={product.image} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductDetail;
