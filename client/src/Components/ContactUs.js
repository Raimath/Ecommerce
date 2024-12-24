import React from 'react'
import { useState } from 'react'

export const ContactUs = () => {
    // const [contactuser,setcontactuser]=useState()
    const [user, setUser] = useState({
        name: "",
        email: "",
        msg: ""

    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }


    const handleSubmit = async (e) => {
        const { name, email, msg } = user
        e.preventDefault();
        if (name && email && msg) {
            // axios.post("http://localhost:8000/register",user).then((res)=> console.log(res))
            const res = await fetch("https://ecommerce-backend-99w3.onrender.com/contact", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, msg })
            });
            const data = await res.json()
            // setcontactuser(data)
            console.log(data.contactUser)
            // console.log(data.contactUser)
            
        }
        else {
            alert("Invalid input")
        }
    }
    return (
        <>
         
            <div className='contactSection'>
                <section className="contact flex">
                <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.3424407171983!2d76.53132142579027!3d15.423599353910765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb781717898374d%3A0x4c853d098a87cab6!2sGangavati%20Bus%20stand!5e0!3m2!1sen!2sin!4v1735048581890!5m2!1sen!2sin" width="100%" height="100%" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    <div className="container contact-section flex">
                        <h2>Contact Us</h2>
                        <form className=" form flex">
                            <div className="name">
                                <label htmlFor='name'>Name:</label>
                                <input id='name' name="name" value={user.name} type="text" placeholder="First Name" required onChange={handleChange} />
                                <label htmlFor='email'>Email:</label>
                                <input id='email' name="email" value={user.email} type="email" placeholder="Email" required onChange={handleChange} />
                                <label htmlFor='msg'>Message:</label>
                                <textarea id='msg' name="msg" value={user.msg} type="text" placeholder="Message" required onChange={handleChange} />
                            </div>
                            <button type="submit" className="login-btn" name="submit" onClick={handleSubmit} >Submit</button>
                        </form>
                    </div>
                    {/* {contactuser?(<div><h3>Name:{contactuser.contactUser.name}</h3> */}
                    {/* <h3>Email:{contactuser.contactUser.email}</h3> */}
                    {/* <h3>Message:{contactuser.contactUser.msg}</h3></div>):"none"} */}
                    
                </section>
            </div>
        </>
    )
}
