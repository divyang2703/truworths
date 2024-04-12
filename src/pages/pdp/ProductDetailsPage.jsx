import React from 'react'
import ProdcutsDetails from '../../components/product details/ProdcutsDetails'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import RelatedProducts from '../../components/realated products/RelatedProducts'
import OtherCustomerRelated from '../../components/customer  related/OtherCustomerRelated'
import ForYou from '../../components/for you/ForYou'

const ProductDetailsPage = () => {
  return (
    <div>
      <Header/>
      <div className='p-4 mt-4'>
      <ProdcutsDetails/>
      <ForYou/>
      <OtherCustomerRelated/>
      <RelatedProducts/>
      </div>
      <Footer/>
    </div>
  )
}

export default ProductDetailsPage
