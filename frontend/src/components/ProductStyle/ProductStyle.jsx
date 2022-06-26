import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './ProductStyle.css'
import { GrStar } from 'react-icons/gr'
import { GiShoppingCart } from 'react-icons/gi'
import { AiOutlineHeart } from 'react-icons/ai'
import { RiSearchEyeLine } from 'react-icons/ri'
import { Store } from '../../Store'
import axios from 'axios'

function ProductStyle(props) {
  const {product} = props

  const { state, dispatch: ctxDispatch } = useContext(Store)
  const {
    cart: { cartItems }
  } = state

  const addToCartHandler = async (item) => {
    const existItem = cartItems.find(item => item.id === product.id)
    const quantity = existItem ? existItem.quantity + 1 : 1
    const { data } = await axios.get(`/products/${item.id}`)
    if (data.countInStock < quantity) {
      window.alert('در انبار این تعداد موجودی نداریم')
      return;
    }
    ctxDispatch({ type: 'CART_ADD_ITEM', payload: { ...item, quantity } })
  }


  return (
    <>
      <div className="product">
        <div className="product-inner">
          <div className="product-img">
            <img src={product.image[0]} alt={product.slug} />
            <div className="product-controls">
              {
                product.countInStock > 0 &&
                <div className="add-to-cart product-control-icon" onClick={() => addToCartHandler(props)}>
                  <GiShoppingCart />
                </div>
              }

              <Link to={`/product/${product.slug}`}>
                <div className="show-product-details product-control-icon">
                  <RiSearchEyeLine />
                </div>
              </Link>
              <div className="add-to-wishlist product-control-icon">
                <AiOutlineHeart />
              </div>
            </div>
          </div>
          <h4 className="product-title">{product.title}</h4>
          <div className="product-price">{product.price} تومان</div>
          <div className="product-rating-and-stock">
            {
              product.countInStock > 0 ?
                <p className="Available-in-stock" style={{ color: 'green' }}>موجود در انبار</p> :
                <p className="Available-in-stock" style={{ color: 'red' }}>ناموجود</p>
            }

            <div className="product-rating">
              <GrStar className="product-rating-icon" />
              <p>{product.rating}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductStyle