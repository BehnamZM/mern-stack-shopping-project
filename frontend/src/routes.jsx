import Home from './container/Home/Home'
import About from './container/About/About'
import Contact from './container/Contact/Contact'
import ProductsScreen from './container/ProductsScreen/ProductsScreen'
import MainProduct from './container/MainProduct/MainProduct'
import Blog from './container/Blog/Blog'
import CartPage from './container/CartPage/CartPage'
import LoginOrRegister from './container/LoginOrRegister/LoginOrRegister'
import ShippingPage from './container/ShippingPage/ShippingPage'
import SelectPayment from './container/SelectPayment/SelectPayment'
import PlaceOrder from './container/PlaceOrder/PlaceOrder'
import UserDashbord from './container/UserDashbord/UserDashbord'




let routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/products', element: <ProductsScreen /> },
  { path: '/blog', element: <Blog /> },
  { path: '/cart', element: <CartPage /> },
  { path: '/shipping', element: <ShippingPage /> },
  { path: '/payment', element: <SelectPayment /> },
  { path: '/user-profile', element: <UserDashbord /> },
  { path: '/placeorder', element: <PlaceOrder /> },
  { path: '/login-register', element: <LoginOrRegister /> },
  { path: '/product/:slug', element: <MainProduct /> },
]

export default routes