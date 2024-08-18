import React from 'react';
import { useParams } from 'react-router-dom';
import productData from '../public/products.js'; // Adjust the path to your data

const ProductPage = () => {
  const { id } = useParams();
  const product = productData.find((p) => p.id == id);

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.images.mainImage} alt="" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      {/* Add other product details here */}
    </div>
  );
};

export default ProductPage;
