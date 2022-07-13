import React, { useState } from 'react'
import './Dropdown.css'

function Dropdown(props) {
  const [dropImg, setDropImg] = useState('/src/assets/sanseveria (1).jpg')


  return (
    <div className={props.show ? 'dropdown-list show-submenu hover' : 'dropdown-list'} >
      <ul>
        <h3>گیاهان آپارتمانی</h3>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (2).jpg')}><a href="" className='dropdown-link'>سانسوریا</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (5).jpg')}><a href="" className='dropdown-link'>بنجامین</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (6).jpg')}><a href="" className='dropdown-link'>یوکا</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (7).jpg')}><a href="" className='dropdown-link'>آدنیوم</a></li>
      </ul>
      <ul>
        <h3>لوازم کشاورزی</h3>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria(8).png')}><a href="" className='dropdown-link'>بیلچه</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/benjamin1.jpg')}><a href="" className='dropdown-link'>سمپاش</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/benjamin2.png')}><a href="" className='dropdown-link'>چاقو</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/adeniom.jpg')}><a href="" className='dropdown-link'>گلدان</a></li>
      </ul>
      <ul>
        <h3>کودها و سموم</h3>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (1).jpg')}><a href="" className='dropdown-link'>کود npk</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (2).jpg')}><a href="" className='dropdown-link'>قارچکش</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (5).jpg')}><a href="" className='dropdown-link'>حشره کش</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (6).jpg')}><a href="" className='dropdown-link'>ورمی کمپوست</a></li>
      </ul>
      <ul>
        <h3>انواع خاک</h3>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (7).jpg')}><a href="" className='dropdown-link'>پرلیت</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (1).jpg')}><a href="" className='dropdown-link'>کوکوپیت</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (2).jpg')}><a href="" className='dropdown-link'>خاک باغچه</a></li>
        <li className='dropdown-item' onMouseEnter={() => setDropImg('/src/assets/sanseveria (7).jpg')}><a href="" className='dropdown-link'>خاک رس</a></li>
      </ul>
      <div className='dropdown-img'>
        <img src={dropImg} alt="" />
      </div>
    </div>
  )
}

export default Dropdown