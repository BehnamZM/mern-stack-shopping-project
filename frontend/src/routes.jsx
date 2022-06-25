import Home from './container/Home/Home'
import About from './container/About/About'
import Contact from './container/Contact/Contact'
import Products from './container/Products/Products'
import MainProduct from './container/MainProduct/MainProduct'
import Blog from './container/Blog/Blog'
import CartPage from './container/CartPage/CartPage'
import LoginOrRegister from './container/LoginOrRegister/LoginOrRegister'




let routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/products', element: <Products /> },
  { path: '/blog', element: <Blog /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/Login-register', element: <LoginOrRegister /> },
  { path: '/product/:slug', element: <MainProduct /> },
]

export default routes