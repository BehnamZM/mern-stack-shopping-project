import React from 'react'
import './SummeryShoppingCart.css'
import { VscClose } from 'react-icons/vsc'
import ShopItem from './ShopItem/ShopItem'
import { Link } from 'react-router-dom'

function SummeryshoppingCart(props) {
  const showHandler = () => {
    props.click()
  }
  return (
    <>
      <div className={
        props.show ?
          'summery-shopping-cart summery-shopping-cart-show' : 'summery-shopping-cart'}>
        <div className="summery-shopping-cart-body">

          <div className="summery-shopping-cart-title">
            <h2>سبد خرید</h2>
            <div className="close-summery-shopping-cart">
              <VscClose onClick={showHandler} />
            </div>
          </div>
          <div className="shopitems">
            <ShopItem />

          </div>
          <div className="summery-shop-totalprice">
            <h4>مجموع قیمت</h4>
            <p>12000000هزار تومان</p>
          </div>
          <Link to='/cart'>
            <button onClick={showHandler}>مشاهده جزئیات</button>
          </Link>
          <button>بررسی نهایی</button>
        </div>
      </div>
      {
        props.show &&
        <div className="shopping-overlay" onClick={showHandler}></div>
      }

    </>
  )
}

export default SummeryshoppingCart