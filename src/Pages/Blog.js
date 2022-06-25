import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";

export default function Blog() {
    const [count, setCount] = useState([]);
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
  .then(res => {
    console.log(res.data);
    setCount(res.data)
  },[]);
      });

  return (
    <div className='container'>
        <ul>
            {count.map((a)=>(
                <li><Link to={'/single/${a.id}'}>{a.title}</Link></li>
            ))}
        </ul>
       

        </div>
  )

  //test comment
}
