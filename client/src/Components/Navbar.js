import React from 'react'
import { useContext } from 'react'
import { Context } from '../Context/context'
import { NavLink } from 'react-router-dom'
import profileImage from '../Images/Profile-PNG-File.png'
export const Navbar = () => {
  // const [loginState,setLoginState]=useState()
  const {isLogedin}=useContext(Context);
  
  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          website.com
        </div>
        <div className='navigations'>
          <ul>
            <li><NavLink to="/home">Home</NavLink></li>
            <li><NavLink to="/shop">Shop</NavLink></li>
            <li><NavLink to='/services'>Services</NavLink></li>
            
            <li><NavLink to="/contact" >Contact</NavLink></li>
            <li><NavLink to="/cart" >My Carts</NavLink></li>
            {(isLogedin) ? ( <NavLink to="/account" className='nav-images'><img src={profileImage} alt='' /></NavLink>
            ) : (<NavLink to="/login" className=" nav-btn" alt=''>Login</NavLink>)}
          </ul>
        </div>

      </nav>
    </>
  )
}
