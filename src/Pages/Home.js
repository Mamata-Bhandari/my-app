import React from 'react';
import { CatData } from '../CatData';
import { ProductData } from '../ProductData';
import { Routes, Route, Link } from "react-router-dom";

export default function Home() {
  return (
    <div className='container py-3'>
      <div className='row'>
        <div className='col-lg-3'>
          <ul class="list-group">
            <li class="list-group-item active" aria-current="true">Shop by categories</li>
            
            {CatData.map((item)=>(
              <li class="list-group-item">
                <Link to={`/cat/${item.id}`}>
                {item.catName}
                </Link>
                </li>
            ))}

          </ul>
        </div>
        <div className='col-lg-9'>
          <img className='w-100' alt='' src='https://icms-image.slatic.net/images/ims-web/3db59345-2b1f-4b83-8793-43c4cba4d4aa.jpg_1200x1200.jpg'/>
        </div>
      </div>
      <h2>Latest Products</h2>
      <div className='row py-3'>
        {ProductData.map((pp)=>(
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
