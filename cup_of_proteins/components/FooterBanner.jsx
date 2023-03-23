import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { urlFor } from '../lib/client'

const FooterBanner = ({footerbanner:{desc,discount,largeText1,largeText2,saleTime,smallText,midText,product,buttonText,image}}) => {
  return (
    <div className='footer-banner-container'>
       <div className='banner-desc'>
        <div className='left'>
            <p>{discount}</p>
            <h3>{largeText1}</h3>
            <h3>{largeText2}</h3>
            <p>{saleTime}</p>
        </div>
        <div className='right'>
             <p>{smallText}</p>
             <h3>{midText}</h3>
             <p>{product}</p>
             <Link href={`/product/${product}`}>
               <button type='button'>{buttonText}</button>
             </Link>
        </div>
         <Image src={'/protein.png'} width={300} height={300} className="footer-banner-image" alt="protein"/>

       
       </div>
    </div>
  )
}

export default FooterBanner
