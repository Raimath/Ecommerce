import React, { useState } from 'react'
import { useContext } from 'react'
import { Context } from '../Context/context'
import { NavLink } from 'react-router-dom'
import profileImage from '../Images/Profile-PNG-File.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

export const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false)
  const { isLogedin } = useContext(Context);
  const isMobileWidth = window.innerWidth <= 950;

  return (
    <>
      <nav className='navbar'>
        <div className='logo'>
          Glance
        </div>
        <div className='resposive-nav'>
          <div className='menu-icons' >
            {!showMenu ? (<FontAwesomeIcon icon={faBars} size='xl' onClick={() => { setshowMenu(!showMenu) }}/>) : (<FontAwesomeIcon icon={faXmark} size='xl' onClick={() => { setshowMenu(!showMenu) }}/>)}
          </div>
          <div className={showMenu ? ('navigations show-menu') : ('navigations')}>
            <ul>
              <li onClick={() => { setshowMenu(!showMenu) }}><NavLink to="/home">Home</NavLink></li>
              <li onClick={() => { setshowMenu(!showMenu) }}><NavLink to="/shop">Shop</NavLink></li>
              <li onClick={() => { setshowMenu(!showMenu) }}><NavLink to='/services'>Services</NavLink></li>
              <li onClick={() => { setshowMenu(!showMenu) }}><NavLink to="/contactUs" >Contact</NavLink></li>
              <li onClick={() => { setshowMenu(!showMenu) }}><NavLink to="/cart" >My Carts</NavLink></li>
              {(isLogedin) ? (<NavLink to="/account" className='nav-images'>{isMobileWidth ?(<li onClick={() => { setshowMenu(!showMenu) }}>My Account</li>) :<img src={profileImage} alt='' />}</NavLink>
              ) : (<NavLink to="/login" className=" nav-btn" alt=''>Login</NavLink>)}
            </ul>
          </div>
        </div>

      </nav>
    </>
  )
}
