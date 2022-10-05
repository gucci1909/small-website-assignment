import React from 'react'
import Home from '../Components/Home'
import FAQ from '../Components/FAQ'
import Contact from '../Components/Contact'
import About from '../Components/About'
import Products from '../Components/Products'
import { Route } from 'react-router-dom'
import {Routes} from "react-router-dom"
import SinglePage from '../Components/SinglePage'
import PageNotFound from "../Components/PageNotFound"
import Login from '../Components/Login'
import PrivateRouter from '../Components/PrivateRouter'
import ShoppingCart from '../Components/ShoppingCart'


function AllRoute() {
  return (
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Products" element={<Products/>}></Route>
    <Route path="/About" element={<About/>}></Route>
    <Route path="/FAQ" element={<FAQ/>}></Route>
    <Route path="/Contact" element={<PrivateRouter><Contact/></PrivateRouter>}></Route>
    <Route path="/Products/:id" element={<SinglePage/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/shoppingcart" element={<ShoppingCart/>}></Route>
    <Route path="*" element={<PageNotFound/>}></Route>
    </Routes>
  )
}

export default AllRoute
