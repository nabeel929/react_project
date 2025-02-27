import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function BuyitNow() {
const navigate=useNavigate()
    const carts=JSON.parse(localStorage.getItem('cart')) || []

    /* total values  */

    const[sum,setSum]=useState()
    useEffect(()=>{

        const Total=carts.reduce((item,count)=>{
            return item +(count.price * count.quantity)
        },0)
        setSum(Total)
    })




function handleincrement(id){
    const Add=carts.map(item=>{
        if(item.id===id){
          return{...item,quantity:item.quantity + 1}
        }
        return item
    })
  
    localStorage.setItem('cart',JSON.stringify(Add))
    navigate('/buyitems')


}

function handledecrement(id){
    const Subtract=carts.map(item=>{
        if(item.id===id){
            return{...item,quantity:item.quantity - 1}
        }
        return item
    })
    localStorage.setItem('cart',JSON.stringify(Subtract))
    navigate('/buyitems')
}


 
function handlremove(id){
    const Remove=carts.filter(item=>
        item.id !==id
        )
        localStorage.setItem('cart',JSON.stringify(Remove))
        navigate('/buyitems')
}




/* on button click */

function Regitser(){
    alert("please register  before ordering so that articles reach at exact destination")
    navigate('/register')
}

    return (
        <>


<div class="bg-gray-100">
  <div class="container mx-auto mt-10">
    <div class="flex shadow-md my-10">
      <div class="w-3/4 bg-white px-10 py-10">
        <div class="flex justify-between border-b pb-8">
          <h1 class="font-semibold text-2xl">Shopping Cart</h1>
          <h2 class="font-semibold text-2xl">{carts?.length} Items</h2>
        </div>
        <div class="flex mt-10 mb-5">
          <h3 class="font-semibold text-gray-600 text-xs uppercase w-2/5">Product Details</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Quantity</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Price</h3>
          <h3 class="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">Total</h3>
        </div>
     {
        carts.map((cart)=>{


            return(
                <>
                 <div class="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div class="flex w-2/5"> 
            <div class="w-20">
              <img class="h-24 object-contain" src={cart?.image} alt={cart?.title}/>
            </div>
            <div class="flex flex-col justify-between ml-4 flex-grow">
              <span class="font-bold text-sm">{cart?.title}</span>
              <span class="text-red-500 text-xs">{cart?.category}</span>
              <Link href="#" class="font-semibold hover:text-red-500 text-gray-500 text-xs" onClick={()=>handlremove(cart?.id)}>Remove</Link>
            </div>
          </div>
          <div class="flex justify-center w-1/5">
            
            <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z "  onClick={()=>handledecrement(cart?.id)}/>
            </svg>
            
            <input class="mx-2 border text-center w-8" type="text" value={cart?.quantity}/>

            <svg class="fill-current cursor-pointer text-gray-600 w-3" viewBox="0 0 448 512">
              <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"  onClick={()=>handleincrement(cart?.id)}/>
            </svg>
          </div>
          <span class="text-center w-1/5 font-semibold text-sm">{cart?.price}</span>
          <span class="text-center w-1/5 font-semibold text-sm">{cart?.price * cart?.quantity}</span>
        </div>
                </>
            )
        })
     }
       

        

        <Link  to="/products" class="flex font-semibold text-indigo-600 text-sm mt-10">
      
          <svg class="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
          Continue Shopping
        </Link>
      </div>

      <div id="summary" class="w-1/4 px-8 py-10">
        <h1 class="font-semibold text-2xl border-b pb-8">Order Summary</h1>
        <div class="flex justify-between mt-10 mb-5">
          <span class="font-semibold text-sm capitilize">{carts?.length} Items</span>
          <span class="font-semibold text-sm">${sum}</span>
        </div>
        <div>
          <label class="font-medium inline-block mb-3 text-sm uppercase">Shipping</label>
          <select class="block p-2 text-gray-600 w-full text-sm">
            <option>Standard shipping - $10.00</option>
          </select>
        </div>
        <div class="py-10">
          <label for="promo" class="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
          <input type="text" id="promo" placeholder="Enter your code" class="p-2 text-sm w-full"/>
        </div>
        <button class="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase">Apply</button>
        <div class="border-t mt-8">
          <div class="flex font-semibold justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>${sum+10}</span>
          </div>
          <button onClick={()=>Regitser()} class="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full">Checkout</button>
        </div>
      </div>

    </div>
  </div>
  </div>

        </>
    )
}
export default BuyitNow;