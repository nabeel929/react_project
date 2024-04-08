import React, { useEffect,useState } from "react";
import Productcard from "../../components/Productcard/Index";
import Featurecart from "../../components/Feature";
import Categories from "../../components/Categories";

function Products(){

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
       <Categories />
        <Productcard products={products} />
        </>
    )
}
export default Products;