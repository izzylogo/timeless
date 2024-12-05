import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <footer>
        <div className='footer-content'>
            <div className="footer-left">
                <h1>Timeless</h1>
            </div>
            <div className="footer-right">
                <h5>Follow Us</h5>
                <ul>
                    <li>instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </div>

    </footer>
  )
}

export default Footer