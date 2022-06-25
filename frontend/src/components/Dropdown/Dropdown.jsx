import React from 'react'
import './Dropdown.css'

function Dropdown(props) {
  return (
    <ul className={props.show ? 'dropdown-list show-submenu hover' : 'dropdown-list'} >
      <li className='dropdown-item'><a href="" className='dropdown-link'>سانسوریا</a></li>
      <li className='dropdown-item'><a href="" className='dropdown-link'>بنجامین</a></li>
      <li className='dropdown-item'><a href="" className='dropdown-link'>یوکا</a></li>
      <li className='dropdown-item'><a href="" className='dropdown-link'>آدنیوم</a></li>
    </ul>
  )
}

export default Dropdown