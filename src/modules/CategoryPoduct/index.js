import React, { useEffect, useState } from "react";
import Productcard from "../../components/Productcard/Index";
import { useParams } from "react-router-dom";


function Categoryproducts(){

    const[products,setProducts]=useState([])
const {name}=useParams()
    useEffect(()=>{

       fetch(`https://fakestoreapi.com/products/category/${name}`).then((result)=>{
result.json().then((resp)=>{
    
  setProducts(resp)  
})


})

    },[])
    return(
        <>
        <Productcard products={products}/>
        </>
    )

}
export default Categoryproducts;