import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { Link } from 'react-router-dom';

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confPassword, setConfPassword] = useState("");
    const [msg, setMsg] = useState("");
    const [role, setRole] = useState("");
    const navigate = useNavigate();

    const saveUser = async(e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/signup', {
                name: name,
                email: email,
                password: password,
                confPassword: confPassword,
                role: role,
            });
            navigate("/")
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg);
            }
        }
    };
  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='columns is-centered'>
            <div className='column is-4'>
                <form onSubmit={saveUser} className='box'>
                    <p className='has-text-centered'>{msg}</p>
                        <h1 className='tittle'>sign-up</h1>
                    <div className='field'>
                        <label className='label'>username</label>
                        <div className='control'>
                            <input className='input' value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='username'/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email'/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='control'>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='*******'/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>confirm password</label>
                        <div className='control'>
                            <input className='input' value={confPassword} onChange={(e) => setConfPassword(e.target.value)} type='password' placeholder='*******'/>
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
                    <div className='field mt-5'>
                            <button type="submit" className='button is-success is-fullwidth'>
                                signup
                            </button>
                    </div>
                    <div>
                    <p>Have an account?</p>
                    <Link to={'/'}>
                    <span>Sign in</span>
                    </Link>
                    </div>
                </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Signup