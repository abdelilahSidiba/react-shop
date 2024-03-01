import { useState } from "react";
import { Product_Data } from "./compsant/Data-product";
import Header from "./compsant/Header";
import Productlist from "./compsant/Product-list";
import Swal from "sweetalert2";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Card from "./compsant/Card";
import Detaiproduct from "./compsant/Detai_product";

export default function App() {
const product =Product_Data
const[Cart_items,setCart_items]=useState([]);
const[product_filter,setproduct_filter]=useState(Product_Data)

const AddToCart=(items)=>{
    let product =Cart_items.find((item)=>items.id===item.id )
    // product is exsests in cart items
    if(product){
        product.qauntite+=1
        setCart_items([...Cart_items])
    
        Swal.fire({
            title: `${product.title.substring(0,20)}...`,
            text: "Your product has been updete",
            icon: "success",
            
          });
    }else{
        // product is not exsests in cart items
        items.qauntite=1
        setCart_items([items, ...Cart_items])

        
        Swal.fire({
            title: `${items.title.substring(0,20)}...`,
            text: "Your product has been saved",
            icon: "success"
          });
    }
   
}

const delete_product=(id)=>{
      setCart_items(Cart_items.filter((items)=>items.id !== id))
}
 
const filterProductBayCategory=(category)=>{
 
  if(category){
    setproduct_filter( product.filter((item)=>item.category===category))
  
  }else{
    setproduct_filter(Product_Data)
    
  }
 
}
const search=(value)=>{
   if(value){
    setproduct_filter( product.filter((item)=> item.description.toLowerCase().includes(value.toLowerCase())|| item.title.toLowerCase().includes(value.toLowerCase()) || item.category.toLowerCase().includes(value.toLowerCase()) ))
      
     console.log(product_filter)   
    
        
  
   }
}


  return(
     <div className="container" style={{marginTop:"100px"}}>
         <BrowserRouter>
               <Header Cart_items={Cart_items}/>
            <Routes>
               <Route path="/" element={ <Productlist product ={product_filter } Cart_items={Cart_items} AddToCart={AddToCart} filterProductBayCategory={filterProductBayCategory} search={search} />   } />
               <Route path="card" element={<Card Cart_items={Cart_items} delete_product={delete_product} />}/>
               <Route path=":product_id" element={<Detaiproduct product ={product} AddToCart={AddToCart} />}/>
            </Routes>
         </BrowserRouter>
                 
     </div>    
  )
      
}


