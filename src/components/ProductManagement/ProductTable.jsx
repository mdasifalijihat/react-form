import React from 'react';

const ProductTable = ({ products }) => {
    
    return (
        <div>
        <h3>Total Products: {products.length}</h3>
        <table border="1" cellPadding="10">
          <thead>
            <tr>
              <th>No.</th>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td colSpan="5">No products available.</td>
              </tr>
            ) : (
              products.map((product, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    );
};

export default ProductTable;


  