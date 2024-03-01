import React from 'react'
import ProductListeItems from './Product-Liste-Items'
import SubNavbar from './Sub_nav_bar'

export default function Product_list( {Cart_items, AddToCart,product , filterProductBayCategory , search}) {
 
  return (
    <div className='row my-4' >
    {<SubNavbar filterProductBayCategory={filterProductBayCategory} search={search}/>}
    {product.map((product,key)=>{
      return(<ProductListeItems  key={key} product={product}  Cart_items={Cart_items} AddToCart={AddToCart} />)
      
    })}
      
    </div>
  )
}
