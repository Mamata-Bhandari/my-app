import React from 'react';
import { useParams } from 'react-router-dom';
import { ProductData } from '../ProductData';
import { Routes, Route, Link } from "react-router-dom";

export default function Cat() {
  let {cid}=useParams();
  let dpc=ProductData.filter((e)=>e.category==cid)
  return (
    <div className='container'>
      <h3>Category</h3>
      <div className='row py-3'>
        {dpc.map((pp)=>(
          <div className='col-lg-3'>
            <div className='shadow p-2 ss'>
            <img className='w-100' src={pp.image} alt=""/>
            <p><strong>{pp.title}</strong></p>
            <p>Price: {pp.price}</p>
            <Link to={`/details/${pp.id}`} className='btn btn-danger'>Read More</Link>

            </div>
            </div>
        ))}


        
      </div>

    </div>
  )
}
