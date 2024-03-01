import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

export default function Card({Cart_items , delete_product}) {
  const [card, setcard]=useState(Cart_items)

  const incriment_Qauntity=(id)=>{
    let product =card.find((item)=>item.id===id )
    if(product){
      
        product.qauntite+=1
        setcard([...card])    
 }}


 const dicriment_Qauntity=(id)=>{
  let product =card.find((item)=>item.id===id )
  if(product){
    if(product.qauntite===1){
  

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
              const filter_product = card.filter((items)=>items.id !== id)
                  console.log(filter_product)
               setcard([...filter_product])
          Swal.fire({
            title: "Deleted!",
            text: "Your product has been deleted.",
            icon: "success"
      });
      }
      });

    }else{
      product.qauntite-=1
    }
     
      setcard([...card])

     
}}

const delete_product_card=(id)=>{
  setcard(card.filter((items)=>items.id !== id))
  delete_product(id)
}
if(Cart_items.length!==0){


  return (
    
    <div style={{marginTop:"100px"}}>
    <table className="table table-striped text-center ">
      <thead>
      <tr>
        <th>#id</th>
        <th>title</th>
        <th>image</th>
        <th>qauntite</th>
        <th>price</th>
        <th>total</th>
        <th>delete</th>
      </tr>
      </thead>
    {card.map((product , index)=>{
      return(
        
        <tbody key={index}>
              <tr>
                    <td>{product.id}</td>
                    <td>{product.title.substring(0,20)}</td>
                    <td> <img width="50px" src={product.image} className="img-thumbnail" alt="..."/> </td>

                    <td>  <span style={{cursor:"pointer"}} onClick={()=>incriment_Qauntity(product.id)}> ▲ </span>
                                  {` ${product.qauntite} `} 
                          <span  style={{cursor:"pointer"}} onClick={()=>dicriment_Qauntity(product.id)}>▼</span> 
                    </td>
                    <td>{product.price.toFixed(2)}$</td>
                    <td> {(product.price * product.qauntite).toFixed(2)}$  </td>
                    <td><i style={{cursor:"pointer"}}
                           className='bi bi-trash-fill bg-danger'
                           onClick={()=>delete_product_card(product.id)}>
                           
                           </i> </td>
            </tr> 
         
        </tbody>
        
      ) 
    })}
    <tfoot>
      <tr>
         <th colSpan={2} className='text-center'> total</th>

         <th colSpan={4}>
          <span style={{marginLeft:"18rem"}} className='badge bg-danger rounded  '>
            {
              card.reduce((acc, item)=> acc += item.price * item.qauntite ,0).toFixed(2)
            }$
          </span>
         
         </th>
          
    </tr>
    
    </tfoot>
  </table>
    </div>
  )
}
else{
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h5 className="card-title">No Purchases Found</h5>
              <p className="card-text">You have not made any purchases yet.</p>
              <Link to="/" className="btn btn-primary">Go Shopping</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

}
}
