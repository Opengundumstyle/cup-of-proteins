import React from 'react'

import { Product,FooterBanner,HeroBanner } from '../components'

import {client} from '../lib/client'

const Home = ({products,bannerData}) => {

    console.log('what is bannerdata',bannerData[0])
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]}/>
        <div className='products-heading'>
          <h2>
            Best Selling Product
          </h2>
          <p>Protein Powders of many variations</p>
            <div className='products-container'>
              {products?.map((product)=>(<Product key={product._id} product={product}/>))}
            </div>
          </div>

      <FooterBanner footerbanner={bannerData&&bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async() => {
    const query ='*[_type == "product"]'
    const products = await client.fetch(query)
    
    const bannerquery ='*[_type == "banner"]'
    const bannerData = await client.fetch(bannerquery)


    return {
       props:{products,bannerData}
    }
    
}


export default Home
