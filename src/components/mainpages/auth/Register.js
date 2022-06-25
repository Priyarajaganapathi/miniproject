import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import undraw_vehicle from "../images/undraw_vehicle.svg"
function Register() {
    const [user, setUser] = useState({
        name:'', email:'', password: ''
    })
    const [error,Seterror]=useState("");

    const onChangeInput = e =>{
        const {name, value} = e.target;
        setUser({...user, [name]:value})
    }

    const registerSubmit = async e =>{
        e.preventDefault()
        try {
            await axios.post('/user/register', {...user})

            localStorage.setItem('firstLogin', true)

            
            window.location.href = "/";
        } catch (err) {
            alert(err.response.data.msg)
            Seterror(error.response.data.msg);
        }
    }
    return (
        <div className='container d-md-flex justify-content-sm-around mt-5'>
        <div className='container mt-5'>
           <img src={undraw_vehicle} class="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt="notes"/> 
        </div>
          
        <div className='container mt-5'>
            <div className='forms-container'>
              <div className='row-sm-5'>
                <form onSubmit={registerSubmit} >
                   <h2 className='title text-center'>Sign Up</h2>
                   <div className='form-group '>
                       <input type={'text'} placeholder='Username' name="name"  value={user.name}  className='form-control' onChange={ onChangeInput}></input>
                   </div>
                   <div className='form-group '>
                       <input type={'email'} placeholder='Email' name="email"  value={user.email}  className='form-control' onChange={ onChangeInput}></input>
                   </div>
                   <div className='form-group '>
                       <input type={'password'} placeholder='password' name="password"  value={user.password}  className='form-control' onChange={ onChangeInput}></input>
                   </div>
                   {error && <div className='text-center text-danger'><p>{error}</p></div>}
                       <div className='text-center'><input type={'submit'} value="Signup" className='text-center btn btn-primary'></input></div>
                </form>
                </div>
            </div>
            <div className="text-center p-5">
            <p>Click here to <Link to={'/login'}>Log in</Link></p>
            </div>
        </div>
        </div>
      )
}

export default Register