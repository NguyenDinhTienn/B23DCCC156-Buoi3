import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

function ProductList({ products, deleteProduct }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="container mt-4">
      <h2>Danh Sách Hàng Hóa</h2>
      <input 
        type="text" 
        className="form-control mb-3" 
        placeholder="Tìm kiếm hàng hóa..." 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
      />
      {currentProducts.length === 0 ? (
        <p>Không tìm thấy hàng hóa nào!</p>
      ) : (
        <ul className="list-group">
          {currentProducts.map((product, index) => (
            <li key={index} className="list-group-item">
              {product.name} - {product.price} VNĐ
              <div>
                <Link to={`/edit/${index}`}>
                  <button className="btn-primary mr-2">Sửa</button>
                </Link>
                <button onClick={() => deleteProduct(index)} className="btn-danger">Xóa</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/add">
        <button className="btn-success mt-3">Thêm Hàng Hóa</button>
      </Link>
      
      <div className="pagination mt-3">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
          disabled={currentPage === 1}
        >
          Trước
        </button>
        <span>Trang {currentPage} / {totalPages}</span>
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
          disabled={currentPage === totalPages}
        >
          Tiếp
        </button>
      </div>
    </div>
  );
}

export default ProductList;
