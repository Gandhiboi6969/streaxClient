import React from 'react'
import Dropdown from './Dropdown'
import Logo from './Logo'
import HeaderLink from './HeaderLink'
export default function Header(props)
{ console.log(props);
  return (
  <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row header">
      
     
    <Logo></Logo>

    <HeaderLink></HeaderLink>  

    <Dropdown name={props.name} img={props.src}></Dropdown>

  </nav>
  )
}