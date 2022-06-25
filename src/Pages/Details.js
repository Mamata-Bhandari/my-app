import React from 'react'
import { useParams } from 'react-router-dom'
import { ProductData } from '../ProductData'

export default function Details() {
    let {id}=useParams()
    let dp=ProductData.find((e)=>e.id==id)
  return (    
    <div className='container py=3'>
        <h2>Details Page</h2>
        <div className='row'>
            <div className='col-lg-4'>
                <img className='w-100' alt='' src={dp.image} />

            </div>
            <div className='col-lg-8'>
                <p>Name: {dp.title}</p>
                <p>Price: {dp.price}</p>
                <p>Description: {dp.description}</p>

            </div>
        </div>

    </div>
  )
}
