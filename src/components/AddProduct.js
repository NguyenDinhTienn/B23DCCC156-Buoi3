import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles.css';

function AddProduct({ addProduct }) {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const navigate = useNavigate();

  const handleAddProduct = () => {
    const newProduct = { name: productName, price: price };
    addProduct(newProduct); 
    navigate('/');
  };

  return (
    <div>
      <h2>Thêm Hàng Hóa</h2>
      <input 
        type="text" 
        placeholder="Tên sản phẩm" 
        value={productName} 
        onChange={(e) => setProductName(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Giá sản phẩm" 
        value={price} 
        onChange={(e) => setPrice(e.target.value)} 
      />
      <button onClick={handleAddProduct}>Thêm</button>
      <Link to="/">
        <button className="btn-secondary mt-2">Quay Lại</button>
      </Link>
    </div>
  );
}

export default AddProduct;
