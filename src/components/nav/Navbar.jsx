"use client"

import React, { useState } from 'react'
import "@/components/nav/Navbar.scss"

const Navbar = () => {

  const [signup, setSignup] = useState(false)

  const close = () => {
    setSignup(false)
  }
  const open = () => {
    setSignup(true)
  }

  return (
    <div className='navbar'>
        <div className="navbar-contain">
            <h4>Timeless</h4>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Add to cart</li>
            </ul>
            <button onClick={open}>Sign Up</button>
        </div>

        {/* sign up modal */}
        {
          signup ? 
          <div className="sign-up-modal">
            <div className="signup-content">
              <form>
                <label htmlFor="name">Full Name</label>
                <input type="text" placeholder='Full Name' />
                <label htmlFor="email">Email</label>
                <input type="text" placeholder='Email'/>
                <label htmlFor="password">Password</label>
                <input type="text" placeholder='Password'/>
              </form>
              <div className="btns">
                <button onClick={close}>Sign Up</button>
                <button onClick={close}>Close</button>
              </div>
            </div>
          </div> :
          null
        }
    </div>
  )
}

export default Navbar