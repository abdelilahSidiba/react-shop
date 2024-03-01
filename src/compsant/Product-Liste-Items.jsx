import React from 'react'
import './display_details_product.css'
import { Link } from 'react-router-dom';

export default function Product_Liste_Items({product , AddToCart}) {

// les star de product
const star=[];
const rating=product.rating.rate
const fullrating=Math.floor(rating)
for(let i=0;fullrating >i ;i++){
    star.push(<span key={i} className='bi bi-star-fill text-warning'> </span>)
}
if(rating>fullrating){
    star.push(<span key={rating} className='bi bi-star-half text-warning'> </span>)
}

 
  return (
    <div className='col-md-4' style={{marginTop:"50px"}}>
            <div className="card  product" style={{width: "18rem",height:"30rem"}}>
                    <center><img style={{width: "10rem",height:"14rem", transition: "transform 0.3s ease", marginTop:"10px"}} src={product.image} className="card-img-top product-image " alt="..."/></center>
                     <center className="product-image " > {star} </center>
                    <div className="card-body">
                            <h5 className="card-title">{product.title.substring(0,20)}...</h5>
                            <h5 className="card-title">{product.price}</h5>
                            <p className="card-text">{product.description.substring(0,80)}...</p>
                            
                            <span 
                                onClick={()=>AddToCart(product)}
                                className="btn btn-primary" >Add to cart <i className="bi bi-cart4"></i> </span>

                            <Link to={`${product.id}`}
                                  className="btn btn-success "
                                  style={{marginLeft:"14px"}}>View details </Link>
         
                    </div>
          </div>
    </div>
  )
}
