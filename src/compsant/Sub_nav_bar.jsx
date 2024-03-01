import React, { useState } from 'react';
import { Product_Data } from './Data-product';

export default function SubNavbar({filterProductBayCategory,search}) {
    const [input_search,setinput_search]=useState();
  // filter les category dans la lest des produits
  const category = Product_Data.map((item)=>item.category)
  const unicCategory=category.filter((items, index)=>category.indexOf(items)=== index )
 //jjjjj
 const handleChange=(e)=>{ 
      inputChange(e)
      search(input_search)
 }   
 const inputChange=(e)=> setinput_search(e.target.value)


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top " style={{marginTop:"50px"}}>
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#subNavbar" aria-controls="subNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="subNavbar">
          <ul className="navbar-nav mx-auto">
            {unicCategory.map((category, index) => (

              <li key={index} className="nav-item">
                <p onClick={()=>filterProductBayCategory(category)}  className="nav-link"> {category} </p>
              </li>

            ))}

                    <li className="nav-item">
                    <p onClick={()=>filterProductBayCategory()}  className="nav-link"> All product </p>
          </li>
          </ul>
          <form className="d-flex">
            <input  className="form-control me-2" type="search" placeholder="Search" aria-label="Search"   onChange={(e)=>handleChange(e) } />
            <button onClick={()=>search(input_search)} className="btn btn-outline-success" type="button">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
}

