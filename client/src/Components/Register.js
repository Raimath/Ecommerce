import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'


export const Register = () => {

    const[user,setUser]=useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:"",

    })

    const handleChange = e =>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }

    const handleRegister =async(e)=>{
        const{name,email,password,confirmPassword}=user
        e.preventDefault();
        if(name && email && password && (password===confirmPassword)){     
            // axios.post("http://localhost:8000/register",user).then((res)=> console.log(res))
            const res= await fetch("https://ecommerce-backend-99w3.onrender.com/register",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({name,email,password,confirmPassword})
            });
            const data= await res.json()
            alert(data.message)
        }
        else{
            alert("Invalid input")
        }
    }
    return (
        <div>
          
            <div className='contactSection'>
                <section className="contact">
                    <div className="container contact-section flex">
                        <h2>Register</h2>
                        <form className=" form flex" >
                            <div className="name">
                                <label htmlFor='name'> Name:</label>
                                <input id='name' name="name" value={user.name}  type="text" placeholder="First Name"  required onChange={handleChange}/>
                                <label htmlFor='email'> Email:</label>
                                <input id='email' name="email" value={user.email} type="email"  placeholder="Email"  required onChange={handleChange}/>
                                <label htmlFor='password'> Password:</label>
                                <input id='password' name="password" value={user.password} type="password" placeholder="password"  required onChange={handleChange}/>
                                <label htmlFor='confirmPassword'> Confirm Password:</label>
                                <input id='confirmPassword' name="confirmPassword" value={user.confirmPassword} type="password"  placeholder="Confirm Password"  required onChange={handleChange}/>
                            </div>
                           <button type="submit" className="login-btn" name="submit" onClick={handleRegister} >Register</button>
                        </form>
                        <div className='regiter-link'>
                        <NavLink to="/login">Already Have an Account? Login</NavLink>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
