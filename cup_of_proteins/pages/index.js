import React from 'react'

const Home = () => {
  return (
    <>
      <div>HeroBanner </div>

        <div>
          <h2>
            Best Selling Product
          </h2>
          <p>Protein Powders of many variations</p>
            <div>
              {['Product 1','Product 2'].map((product)=>(product))}
            </div>
          </div>

      <div>Footer</div>
    </>
  )
}

export default Home
