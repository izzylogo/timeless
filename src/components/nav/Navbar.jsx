import React from 'react'
import "@/components/nav/Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar-contain">
            <h4>Timeless</h4>
            <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
            </ul>
            <button>Add to cart</button>
        </div>
    </div>
  )
}

export default Navbar