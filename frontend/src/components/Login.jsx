import React, {useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {LoginUser, reset} from '../features/AuthSlice'
import { Link } from 'react-router-dom'



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user, isError, isSuccess, isLoading, message} = useSelector(
        (state) => state.auth
    );

    useEffect(() => {
        if (user || isSuccess) {
            navigate("/dashboard");
        }
        dispatch(reset());
    }, [user, isSuccess, dispatch, navigate]);

    const Auth = (e) => {
        e.preventDefault();
        dispatch(LoginUser({ email, password }));
    };
  return (
    <section className="hero has-background-grey-light is-success is-fullheight is-fullwidth">
      <div className="hero-body">
        <div className="container">
          <div className='columns is-centered'>
            <div className='column is-4'>
                <form onSubmit={Auth} className='box'>
                    {isError && <p className='has-text-centered'>{message}</p>}
                        <h1 className='tittle'>sign-in</h1>
                    <div className='field'>
                        <label className='label'>email</label>
                        <div className='control'>
                            <input className='input' value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='email'/>
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>password</label>
                        <div className='control'>
                            <input className='input' value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='*******'/>
                        </div>
                    </div>
                    <div className='field mt-5'>
                            <button type="submit" className='button is-success is-fullwidth'>
                            {isLoading ? "Loading" : "login"} </button>
                    </div>
                    <div>
                    <p>dont Have an account?</p>
                    <Link to={'/signup'}>
                    <span>Sign-up</span>
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

export default Login