import React from 'react'
import './ShopItem.css'
import { VscClose } from 'react-icons/vsc'

function ShopItem() {
  return (
    <div className="shopitem">
      <div className="shopitem-img">
        <img src="./src/assets/logo.png" alt="shopitem" />
      </div>
      <div className="shopitem-des">
        <div className="shopitem-title">لباس</div>
        <div className="shopitem-price">390 هزار تومان</div>
      </div>
      <div className="remove-shopitem">
        <VscClose />
      </div>
    </div>
  )
}

export default ShopItem