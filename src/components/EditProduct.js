import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './styles.css';

function EditProduct({ products, editProduct }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const productIndex = parseInt(id);
  const product = products[productIndex];

  const [productName, setProductName] = useState(product.name);
  const [price, setPrice] = useState(product.price);

  const handleEditProduct = () => {
    const updatedProduct = { name: productName, price: price };
    editProduct(productIndex, updatedProduct);
    navigate('/');
  };

  return (
    <div>
      <h2>Chỉnh Sửa Hàng Hóa</h2>
      <input 
        type="text" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={handleEditProduct}>Sửa</button>
      <Link to="/">
        <button className="btn-secondary mt-2">Quay Lại</button>
      </Link>
    </div>
  );
}

export default EditProduct;
