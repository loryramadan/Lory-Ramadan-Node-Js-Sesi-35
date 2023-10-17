import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const FormAddProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [msg, setMsg] = useState("");
    const navigate = useNavigate();

    const saveProduct = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/products', {
                name: name,
                price: price
            });
            navigate("/products")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };


  return (
    <div>
        <h1 className='title'>product</h1>
        <h2 className='subtitle'>add new product</h2>
        <div className='card is-shadowless'>
            <div className='card-content'>
                <div className='content'>
                <form onSubmit={saveProduct}>
                    <p className='has-text-center'>{msg}</p>
                    <div className='field'>
                        <label className='label'>name</label>
                        <div className='control'>
                            <input
                             className='input' 
                             type='text' 
                             placeholder='product name'
                             value={name}
                             onChange={(e) => setName(e.target.value)}
                             />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>price</label>
                        <div className='control'>
                            <input 
                            className='input'
                            type='text'
                            placeholder='price'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button type="submit" className='button is-success'>save</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormAddProduct