import React,{useContext} from 'react'
import '../CSS_files/NavBar.css'
import { NavLink } from 'react-router-dom'
import {  allContext} from '../Components/ContextProvider';
const NavBar = () => {
    const{cartCount}=useContext(allContext)
    console.log(cartCount);
  return (
    <>
    <div className='navbar'>
      <h1>Shopping Mall</h1>
      <ul>
        <NavLink to={'/'}>
        <li>Home</li>
        </NavLink>
        <NavLink to={'/product'}>
        <li>Product</li>
        </NavLink>
        <NavLink to={'/cart'}>
        <li className='count'>Add to cart {cartCount>0 ? <span>{cartCount}</span>:<p></p>}</li>
        </NavLink>
      </ul>
    </div>
    </>
  )
}

export default NavBar