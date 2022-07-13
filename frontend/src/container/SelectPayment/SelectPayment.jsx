import React from 'react'
import './SelectPayment.css'

import CheckoutSteps from '../../components/CheckoutSteps/CheckoutSteps'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import ButtonStyle from '../../components/ButtonStyle/ButtonStyle'


function SelectPayment() {
  return (
    <div className="select-payment">
      <CheckoutSteps step1 step2 step3 />
      <div className="payment-title">
        <TitleStyle>
          انتخاب روش پرداخت
        </TitleStyle>
      </div>
      <div className="payment-body">
        <form>
          <label htmlFor=""><p>پرداخت از طریق کیف پول</p>
            <input type="radio" className='payment-way' name='radio' />
          </label>
          <label htmlFor=""><p>پرداخت از طریق کارت بانکی</p>
            <input type="radio" className='payment-way' name='radio' />
          </label>
          <div>
            <ButtonStyle>
              ارسال
            </ButtonStyle>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SelectPayment