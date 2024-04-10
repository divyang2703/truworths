import React from 'react'
import ProdcutsDetails from '../../components/product details/ProdcutsDetails'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'

const ProductDetailsPage = () => {
  return (
    <div>
      <Header/>
      <div className='p-4 m-4'>
      <ProdcutsDetails/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage
