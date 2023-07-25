import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id: productId } = useParams(); 

  const [productData, setProductData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${productId}`)
      .then((response) => setProductData(response.data))
      .catch((error) => console.log(error));
  }, [productId]);

  return (
    <div className="product-detail-container">
      <h1>{productData.name}</h1>
      <p>{productData.description}</p>
      <img src={productData.image} alt={productData.name} />
      <Link to={`/product/${productId}/edit`}>Editar</Link>
    </div>
  );
};

export default ProductDetail;
