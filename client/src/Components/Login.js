import React, { useContext ,useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '../Context/context'

export const Login = () => {
    const {setloginInfo,setisLogedin}=useContext(Context);

    const navigate = useNavigate();
    const[user,setUser]=useState({
        email:"",
        password:"",
        
    })
    const handleChange = e =>{
        const{name,value}=e.target
        setUser({
            ...user,
            [name]:value
        })
    }
    const handleLogin =async(e)=>{
        const{email,password}=user
        e.preventDefault();
        if(email && password ){     
            // axios.post("http://localhost:8000/register",user).then((res)=> console.log(res))
            try{
            const res= await fetch("https://ecommerce-backend-99w3.onrender.com/login",{
                method:'POST',
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email,password})
            });
            if(res.status===200)
            {
                const data= await res.json()
                console.log(data)
                setloginInfo(data.user)
                localStorage.setItem('id',data.user._id)
                setisLogedin(true)
                alert("Login succesful")
                navigate('/home')
            }
            }catch(error){
                alert("Invalid Username or Password")
            }
        }
        else{
            alert("Invalid input")
        }
    }

    // useEffect(() => {
    //     console.log("Updated loginInfo:", loginInfo);
    // }, [loginInfo]);


    return (
        <div className='contactSection'>
           
            <section className="contact">
                <div className="container contact-section flex" >
                    <h2>Login</h2>
                    <form className=" form flex" >
                        <div className="name">
                            <label htmlFor='email'>Email:</label>
                            <input id='email' name="email" value={user.email} type="email"  placeholder="Email"required onChange={handleChange}/>
                            <label htmlFor='password'>Password:</label>
                            <input id='password' name="password" type="password" value={user.password} placeholder="password" required onChange={handleChange}/>
                        </div>
                        
                        <button type="submit" className="login-btn" name="submit" onClick={handleLogin} >Login</button>
                        <div className='regiter-link'>
                        <NavLink to="/register">New User? Sign Up</NavLink>
                    </div>
                    </form>
                    
                </div>
            </section>
        </div>
    )
}
