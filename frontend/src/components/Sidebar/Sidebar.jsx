import React from 'react'
import './Sidebar.css'
import Input from '../../components/Input/Input'
import ImageStyle from '../../components/ImageStyle/ImageStyle'
import {BsSearch} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'

function Sidebar() {
  return (
    <>
      <aside>
        <div className="aside-inner">
          <div className="products-searchbox">
            <Input type='text' placeholder='سرچ کن' />
            <BsSearch className='search-in-products-icon'/>
          </div>
          <div className="products-categury">
            <h4>دسته بندی محصولات</h4>
            <ul className='catagury-items'>
              <li className="categury-item">
                <IoIosArrowBack />
                گیاهان آپارتمانی
              </li>
              <li className="categury-item">
                <IoIosArrowBack />
                گلدان
              </li>
              <li className="categury-item">
                <IoIosArrowBack />
                سموم و کودها
              </li>
              <li className="categury-item">
                <IoIosArrowBack />
                ابزارآلات کشاورزی
              </li>
              <li className="categury-item">
                <IoIosArrowBack />
                انواع خاک ها
              </li>

            </ul>
          </div>
          <ImageStyle src="./src/assets/sanseveria(8).png" title1="بهترین گیاهان آپارتمانی" title2="با ضمانت تعویض"/>
        </div>
      </aside>
    </>
  )
}

export default Sidebar