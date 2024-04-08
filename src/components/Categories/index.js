import React, { useEffect, useState } from "react";
import Featurecart from "../Feature";





function Categories(){
const[categories,setCategories]=useState([])


    useEffect(()=>{


fetch('https://fakestoreapi.com/products/categories').then((result)=>{
    result.json().then((res)=>{

        setCategories(res)
    })
})


    },[])


    console.warn("categories",categories)

    return(
        <>
        <Featurecart cards={categories}/>
        </>
    )
}
export default Categories;