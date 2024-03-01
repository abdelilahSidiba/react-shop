import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Detai_product({product, AddToCart}) {
// filter les produit par id passe au paramaitre
const {product_id}=useParams("id")
const data_product=product.filter((items)=>items.id===parseInt(product_id))
// les star de product
const star=[];
const rating=data_product[0].rating.rate
const fullrating=Math.floor(rating)
for(let i=0;fullrating >i ;i++){
    star.push(<span key={i} className='bi bi-star-fill text-warning'> </span>)
}
if(rating>fullrating){
    star.push(<span key={rating} className='bi bi-star-half text-warning'> </span>)
}

  return (
    <div className="container mt-5">
    <div className="row">
      <div className="col-md-6">
        <img src={data_product[0].image} alt={data_product[0].title} className="img-fluid rounded shadow" style={{maxWidth:"80%"}} />
      </div>
      <div className="col-md-6">
        <div className="bg-light p-5 rounded shadow">
          <h2 className="mb-4"> {data_product[0].title} </h2>
          <p><strong>Price: </strong> {data_product[0].price}$</p>
          <p><strong>Description:</strong> {data_product[0].description} </p>
          <p><strong>Category:</strong> {data_product[0].category} </p>
          <p><strong>Rating:</strong>   {star}</p>
                <div className='row'>
                        <button onClick={()=>AddToCart(data_product[0])} className="btn btn-primary col-6 w-100 mb-3" >  Add to Cart  <i className="bi bi-cart4"></i></button>
                        <Link to="/" className="btn btn-success col-6 w-100 mb-3">Back to home</Link>
                </div>
                
        </div>
      </div>
    </div>
  </div>

  
  )
}
