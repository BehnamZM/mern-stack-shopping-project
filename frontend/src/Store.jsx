import { createContext, useReducer } from 'react';

export const Store = createContext()

const initialState = {
  cart: {
    cartItems: localStorage.getItem('cartItems') ?
      JSON.parse(localStorage.getItem('cartItems')) : [],
    shippingInfos: localStorage.getItem('shippingInfos') ? JSON.parse(localStorage.getItem('shippingInfos')) : {}
  },
  userInfo: localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'CART_ADD_ITEM':
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(item => item.id === newItem.id)
      const cartItems = existItem ? state.cart.cartItems.map(item => item.id === existItem.id ? newItem : item) :
        [...state.cart.cartItems, newItem]
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
      return { ...state, cart: { ...state.cart, cartItems } }
    // return {
    //   ...state,
    //   cart: {
    //     ...state.cart,
    //     cartItems: [...state.cart.cartItems, action.payload],
    //   }
    // }
    case 'CART_REMOVE_ITEM':
      {
        const cartItems = state.cart.cartItems.filter(item =>
          item.id !== action.payload.id
        )
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        return { ...state, cart: { ...state.cart, cartItems } }
      }
    case 'USER_SIGNIN':
      return { ...state, userInfo: action.payload }

    case 'USER_SIGNOUT':
      return { ...state, userInfo: null, cart: {
        cartItems: [],
        shippingInfos: {}
      } }
    case 'SEND_SHIPPING_INFOS':
      return { ...state, cart: { ...state.cart, shippingInfos: action.payload } }
    default:
      return state
  }
}


export const StoreProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch }

  return (
    <Store.Provider value={value}>
      {props.children}
    </Store.Provider>
  )

} 