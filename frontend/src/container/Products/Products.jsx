import React, { useReducer, useEffect } from 'react'
import './Products.css'
import { FaThList } from 'react-icons/fa'
import { CgMenuGridR } from 'react-icons/cg'
import TitleStyle from '../../components/TitleStyle/TitleStyle'
import Sidebar from '../../components/Sidebar/Sidebar'
import ProductStyle from '../../components/ProductStyle/ProductStyle'
import axios from 'axios'
import logger from 'use-reducer-logger'
import Preload from '../../components/Preload/Preload'

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_REQUEST':
      return { ...state, loading: true };
    case 'FETCH_SUCCESS':
      return { ...state, loading: false, products: action.payload };
    case 'FETCH_FAIL':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}


function Products() {

  const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
    products: [],
    loading: true,
    error: ''
  })

  useEffect(() => {
    const fetchData = async () => {
      dispatch({ type: 'FETCH_REQUEST' });
      try {
        const result = await axios.get('/api/products');
        dispatch({ type: 'FETCH_SUCCESS', payload: result.data});
      } catch (err) {
        dispatch({ type: 'FETCH_FAIL', payload: err.message });
      }
    };
    fetchData();
  }, []);

  return (
    <div className="products">
      <div className="products-title">
        <TitleStyle>فروشگاه</TitleStyle>
      </div>
      <div className="products-body container">
        <Sidebar />
        <div className="products-inner">
          <div className="products-controls">
            <div className="number-of-products">
              9 محصول از 30 تا
            </div>
            <div className="show-products-Horizontal">
              <CgMenuGridR />
            </div>
            <div className="show-products-vertical">
              <FaThList />
            </div>
            <div className="sort-products">
              مرتب سازی به صورت پیش فرض
            </div>
          </div>
          <div className="products-list">
            {
              loading ? <Preload />:
              error ? (<h3>{error}</h3>) : (
              products.map(product => (
                <ProductStyle {...product} key={product.id} />)
              ))
            }

          </div>
        </div>
      </div>
    </div>
  )
}

export default Products