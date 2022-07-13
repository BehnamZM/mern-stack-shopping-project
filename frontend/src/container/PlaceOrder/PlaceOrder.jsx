import React from 'react'
import './PlaceOrder.css'
import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import ButtonStyle from '../../components/ButtonStyle/ButtonStyle'


function PlaceOrder() {
  return (
    <div className="placeorder-page">
      <CheckoutSteps step1 step2 step3 step4 />
      <div className="payment-title">
        <TitleStyle>
          مرور سفارش
        </TitleStyle>
        <div className="placeorder-body container">
          <div className="shipping-review">
            <h3>مشخصات ارسال</h3>
            <div className="shipping-preview-name">
              <p className='title'>نام:</p>
              <p>بهنام زارع</p>
            </div>
            <div className="shipping-preview-address">
              <p className='title'>آدرس کامل:</p>
              <p>البرز، کرج، دانشگاه کشاورزی و منابع طبیعی</p>
            </div>
          </div>
          <div className="payment-preview">
            <p className='title'>روش پرداخت:</p>
            <p>پرداخت از طریق کارت بانکی</p>
          </div>
          <div className="preview-orders">
            <h3 style={{textAlign: 'center'}}>محصولات</h3>
            <div className="preview-order-item">
              <div className="preview-order-image">
                <img src="./src/assets/benjamin1.jpg" alt="" />
              </div>
              <div className="preview-order-numbers">
                <p className='title'>تعداد</p>
                <p>4</p>
              </div>
              <div className="preview-order-price">
                <p className='title'>قیمت</p>
                <p >120,000 تومان</p>
              </div>
            </div>
          </div>
          <div className="preview-price-box">
            <h3 className="preview-price-title">
              جزییات هزینه سفارشات
            </h3>
            <div className="preview-price-body">
              <div className="preview-orders-price">
                <p className='title'>قیمت محصولات:</p>
                <p className='price'>120,000 تومان </p>
              </div>
              <div className="preview-shipping-price">
                <p className='title'>هزینه ارسال:</p>
                <p className='price'>12,000 تومان </p>
              </div>
              <div className="preview-tax-price">
                <p className='title'>مالیات:</p>
                <p className='price'>1,200 تومان </p>
              </div>
              <div className="preview-total-price">
                <p className='title'>قیمت محصولات:</p>
                <p className='price'>120,000 تومان </p>
              </div>
              <div>
                <ButtonStyle>
                  تکمیل خرید
                </ButtonStyle>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder