import React, { useContext } from 'react'
import {useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import profileImage from '../Images/Profile-PNG-File.png'
import { Context } from '../Context/context'

export const MyAccount = () => {
  const {loginInfo,setisLogedin}=useContext(Context)
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('id')) {
      navigate('/home');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogout=()=>{
    localStorage.removeItem('id')
    setisLogedin(false)
    console.log(loginInfo)
    
    navigate('/home');
  }
  return (
    <div className='myaccount-section flex'>
     
      <div className=' profile'></div>
      <section className="myaccount">
        <div className="container myAccount-container flex" >
          <div className='account-img'>
            <img src={profileImage} alt='account '></img>
          </div>
          <h3>MY ACCOUNT</h3>
          <div className='acount-info flex'>
            <div>
              <label className='info-label'>Name</label>
              <div className='info-details'>{loginInfo.name}</div>
            </div>
            <div>
              <label className='info-label'>Email</label>
              <div className='info-details'>{loginInfo.email}</div>
            </div>
            <div><Link to='/cart'>My Carts</Link></div>
            <div><Link to='/tc'>Terms and Conditions</Link></div>
            <div>Help</div>
            <div onClick={handleLogout}>Logout</div>
          </div>
        </div>
      </section>
    </div>
  )
}
