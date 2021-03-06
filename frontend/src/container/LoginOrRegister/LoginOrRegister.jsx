import React, { useContext, useEffect, useState } from 'react'
import './LoginOrRegister.css'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import ButtonStyle from '../../components/ButtonStyle/ButtonStyle'
import Input from '../../components/Input/Input'
import Preload from '../../components/Preload/Preload'
import { Store } from '../../Store'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


 
function LoginOrRegister() {

  const [regEmail, setRegEmail] = useState('')
  const [regPassword, setRegPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [regLastName, setRegLastName] = useState('')
  const [logEmail, setLogEmail] = useState('')
  const [logPassword, setLogPassword] = useState('')
  const [regRepeatPassword, setRegRepeatPassword] = useState('')
  const navigate = useNavigate()
  const { state, dispatch: ctxDispatch } = useContext(Store)
  const {userInfo} = state

  const loginHandler = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('/api/users/signin', {
        logEmail,
        logPassword
      })

      ctxDispatch({type:'USER_SIGNIN', payload: data})
      localStorage.setItem('userInfo',JSON.stringify(data))
    }
    catch (err) {
      alert(err.message)
    }

  }

  const registerHandler = async () => {
    console.log('regiser')
  }

  useEffect(() => {
    if(userInfo){
      navigate('/')
    }
  },[userInfo, navigate])


  return (
    <>
      <div className="login-register">
        {/* {loading && <Preload />}
        {error && <alert>{error}</alert>} */}
        <div className="login-title">
          <TitleStyle>صفحه ورود و ثبت نام</TitleStyle>
        </div>
        <div className="login-register-body container">

          {/* login part */}

          <form className="login-part auth-part" onSubmit={loginHandler}>
            <h4>ورود</h4>
            <label>آدرس ایمیل
              <Input type="email" placeholder='ایمیل خود را وارد کنید' onChange={e => setLogEmail(e.target.value)} />
            </label>
            <label>رمز عبور
              <Input type="password" placeholder='رمز عبور شما' onChange={e => setLogPassword(e.target.value)} />
            </label>

            <div className="login-massages">
              <p className="forget-password-massage">آیا رمز خود را فراموش کرده اید؟</p>
              <label className="remember-checkbox">
                مرا به خاطر بسپار
                <Input type="checkbox" />
              </label>
            </div>
            <ButtonStyle>
              ورود
            </ButtonStyle>

          </form>


          {/* register part */}

          <form className="register-part auth-part" onSubmit={registerHandler}>
            <h4>ثبت نام</h4>
            <div className="register-name-part">
              <label>نام
                <Input type="text" placeholder='نام خود را وارد کنید' onChange={e => setDisplayName(e.target.value)} />
              </label>
              <label>نام خانوادگی
                <Input type="text" placeholder='نام خانوادگی خود را وارد کنید' onChange={e => setRegLastName(e.target.value)} />
              </label>
            </div>
            <label>آدرس ایمیل
              <Input type="email" placeholder='ایمیل خود را وارد کنید' onChange={e => setRegEmail(e.target.value)} />
            </label>

            <div className="register-password-part">
              <label>رمز عبور
                <Input type="password" placeholder='رمز عبور شما' onChange={e => setRegPassword(e.target.value)} />
              </label>
              <label>تکرار رمز عبور
                <Input type="password" placeholder='تکرار رمز عبور' onChange={e => setRegRepeatPassword(e.target.value)} />
              </label>
            </div>
            <div>
              <ButtonStyle>
                ثبت نام
              </ButtonStyle>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginOrRegister