import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import style from "./Product.module.css"
import {Link, useSearchParams} from "react-router-dom"

const getUrl = (value)=>{
  value = Number(value);
  if (typeof value === "number" && value <= 0) {
    value = 1;
  }
  if (!value) {
    value = 1;
  }
  return value;
}

function Products() {
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(false);
  const [searchParams,setSearchParams] = useSearchParams();
  const initialSearch = getUrl(searchParams.get("page"))
  const [page,setPage] = useState(initialSearch);
  const [name,setName] = useState("");
  const fetching = async (page)=>{
    setLoading(true)
    try {
      const res = await fetch(`https://calm-beyond-95466.herokuapp.com/api/Product?_page=${page}&_limit=10`)
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    } catch (error) {
      console.log("error");
    }
  }
  useEffect(()=>{
    fetching(page)
  },[page])
  useEffect(()=>{
    setSearchParams({page,name})
  },[page,name])
  const handleHTL = async(page)=>{
    setLoading(true)
    try {
      const res = await fetch(`https://calm-beyond-95466.herokuapp.com/api/Product?_page=${page}&_sort=price&_order=desc`)
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    } catch (error) {
      console.log("error");
    }
  }
  const handleLTH = async(page)=>{
    setLoading(true)
    try {
      const res = await fetch(`https://calm-beyond-95466.herokuapp.com/api/Product?_page=${page}&_sort=price&_order=asc`)
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    } catch (error) {
      console.log("error");
    }

  } 
  const handleTS = async(page)=>{
    

    setLoading(true)
    try {
      const res = await fetch(`https://calm-beyond-95466.herokuapp.com/api/Product?_page=${page}&category=T-shirt`)
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    } catch (error) {
      console.log("error");
    }



  } 
  const handleTT = async()=>{
    setLoading(true)
    try {
      const res = await fetch(`https://calm-beyond-95466.herokuapp.com/api/Product?_page=${page}&category=Tank%20Top`)
      const data = await res.json();
      setData(data);
      setLoading(false);
      
    } catch (error) {
      console.log("error");
    }

  }
  if(loading){
    return <h1>...Loading</h1>
  }

  return (
  <div>
      <h1>Mens Wear Clothing</h1>
      <div className="container">
        <div className='d-flex justify-content-center'>
        <h4 className={style.centre}>Sorting Price</h4>
       
        <button onClick={handleHTL} className={style.button31}>High to Low</button>
        <button onClick={handleLTH} className={style.button31}>Low to High</button>

        </div>
        <div className='d-flex justify-content-center'>

        <h4 className={style.centre}>Filter by category</h4>
        <button onClick={handleTS} className={style.button31}>T-shirt</button>
        <button onClick={handleTT} className={style.button31}>Tank Top</button>

        </div>
        <input type="text" placeholder='Search products' value={name} onChange={(e)=>setName(e.target.value)} />
        <div className={style.Product}>

        {data&&data.map((el)=>(
          <div key={el.id}>
            <img src={el.image_url} alt="" />
            <Link to={`/Products/${el.id}`}>
              <h1>
              {el.name}

              </h1>
              </Link>
            <h3>Price : {el.price}</h3>
            <h4>Discount :{el.discount}</h4>
          </div>
        ))}
        </div>
      </div>
      <div className={style.button1} >
        <button disabled={page===1} onClick={()=>setPage(page-1)}>PREV</button>
        <h1>{page}</h1>
        <button disabled={page===2} onClick={()=>setPage(page+1)}>NEXT</button>
        
      </div>

  </div>)
}

export default Products
