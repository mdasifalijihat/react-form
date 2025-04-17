import React from 'react';

const ProductForm = ({handleAddProduct}) => {

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        console.log('form', name, price, quantity);

        const newProduct = {
            name, 
            price, 
            quantity
        }
    //    console.log(newProduct)
    handleAddProduct(newProduct)


    }
    return (
        <div>
            <form onSubmit={handleProductSubmit} >
            <input type="text" name="name" id="" placeholder='Product Name' />
            <br />
            <input type="text" name="price" id="" placeholder='Product Price' />
            <br />
            <input type="text" name="quantity" id="" placeholder='Product Quantity' />
            <br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;