import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import Hero from "../../components/Hero";
import Products from "../../components/Productcard/Index";
import Footer from "../../components/Footer";
import Stcart from "../../components/Statics";
import Featurecart from "../../components/Feature";
import Productcard from "../../components/Productcard/Index";
import Categories from "../../components/Categories";

function Home(){

const[products,setProducts]=useState([])

    useEffect(()=>{

       fetch("https://fakestoreapi.com/products").then((result)=>{
result.json().then((resp)=>{
    
  setProducts(resp)  
})


})

    },[])
  
    return(
        <>
        <Hero/>
        <Categories/>
        <div className="flex flex-col text-center w-full">
      <h2 className="text-xm text-purple-500 tracking-widest font-medium title-font mb-1">Products</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Popular Products</h1>
    </div>
    {
products.length > 0 ?
<Productcard products={products}/>
:<div>loading</div>

    }
       
        
        <Stcart/>
        
        </>

    )
}
export default Home; 