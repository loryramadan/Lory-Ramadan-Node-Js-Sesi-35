import React, { useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios"

const ProductList = () => {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        getProduct();
    },[]);

    const getProduct =async ()=> {
        const response = await axios.get('http://localhost:5000/products');
        setProduct(response.data);
    };

    const deleteProduct = async (productId) => {
        await axios.delete(`http://localhost:5000/products/${productId}`);
        getProduct();
    }
    console.log(product)

  return (
    <div>
        <h1 className='title'>product</h1>
        <h2 className='subtitle'>list of product</h2>
        <Link to={'/products/add'} className='button is-primary mb-2'>add new</Link>
        <table className='table is-striped is-fullwidth'>
            <thead>
                <tr>
                    <th>no</th>
                    <th>product name</th>
                    <th>price</th>
                    <th>created by</th>
                    <th>action</th>
                </tr>
            </thead>
            <tbody>
                {product.map((product, index) => (
                <tr key={product.uuid}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.user.name}</td>
                    <td>
                        <Link to={`/products/edit/${product.uuid}`} className='button is-small is-info'>Edit</Link>
                        <button onClick={() => deleteProduct(product.uuid)} className='button is-small is-danger'>Delete</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default ProductList