import React, {useState, useEffect} from 'react'
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const FormEditUser = () => {
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [role, setRole] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getUserById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/users/${id}`);
        setName(response.data.name);
        setEmail(response.data.email);
        setRole(response.data.role);
      } catch (error) {
        if (error.response) {
          setMsg(error.response.data.msg);
        }
      }
    };
    getUserById();
  }, [id]);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
        name: name,
        email: email,
        password: password,
        confPassword: confPassword,
        role: role,
      });
      navigate("/users");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };


  return (
    <div>
        <h1 className='title'>users</h1>
        <h2 className='subtitle'>update user</h2>
        <div className='card is-shadowless'>
            <div className='card-content'>
                <div className='content'>
                <form onSubmit={updateUser}>
                    <p className='has-text-centered'>{msg}</p>
                    <div className='field'>
                        <label className='label'>name</label>
                        <div className='control'>
                            <input 
                            className='input'
                            type='text' 
                            placeholder='name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input 
                            className='input' 
                            type='text' 
                            placeholder='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='control'>
                            <input 
                            className='input' 
                            type='password' 
                            placeholder='*******'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>confirm password</label>
                        <div className='control'>
                            <input 
                            className='input' 
                            type='password' 
                            placeholder='*******'
                            value={confPassword}
                            onChange={(e) => setConfPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>role</label>
                        <div className='control'>
                            <div className='select is-fullwidth'>
                                <select value={role} onChange={(e) => setRole(e.target.value)}>
                                    <option value="admin">admin</option>
                                    <option value="user">user</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='field'>
                        <div className='control'>
                            <button type="submit" className='button is-success'>update</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FormEditUser