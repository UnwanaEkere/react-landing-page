import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import '../styles/navbar.css'


function Navbar() {
  return (
    <div >
      <nav style={{ display: 'flex', justifyContent : 'space-around',backgroundColor:'seagreen', color:'white', padding: '10px 0' }}>
          <div>
            <p><span style={{fontSize:'27px', textDecoration:'underline', fontFamily:'sans-serif' }}>BUSINESS</span><span style={{fontFamily:'sans-serif'}}>PORTFOLIO</span></p>
          </div>
        <ul className='navMain'  style={{ display: 'flex',gap : '20px', alignItems:'center', listStyle : 'none',  }}>
          <li>
            <Link to={'/'} className='navlink' >H0ME</Link>
          </li>

          <li>
            <Link to={'/aboutUs'} className='navlink'>ABOUT US</Link>
          </li>

          <li>
            <Link to={'/ourSkill'} className='navlink'>OUR SKILL</Link>
          </li>

          <li>
            <Link to={'/choose'} className='navlink'>WHY CHOOSE</Link>
          </li>

          <li>
            <Link to={'/portfolio'} className='navlink'>PORTFOLIO</Link>
          </li>

          <li>
            <Link to={'/blog'}className='navlink'>BLOG</Link>
          </li>

          <li>
            <Link to={'/contact'}className='navlink'>LOGIN</Link>
          </li>
        </ul>
        <Outlet />
      </nav>
    </div>
  )
}

export default Navbar