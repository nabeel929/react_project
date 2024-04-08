import React, { useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";


function Cart(){

const navigate=useNavigate();
const carts=JSON.parse(localStorage.getItem('cart')) || []
const [totalprice,setTotalprice]=useState(0)

useEffect(()=>{
    const total=carts.reduce((item,count)=>{
         return item + (count.price * count.quantity)
},0)   
 setTotalprice(total)   
},[carts])






 function Handleinc(id)
{
    const increment=carts.map((item)=>{
        if(item.id===id){
            return{
                ...item,quantity:item.quantity + 1
            }
        
        }
        return item

    })

    localStorage.setItem('cart',JSON.stringify(increment)) 
navigate('/cart')
}



function Handledec(id)
{
    const decrement=carts.map((item)=>{
        if(item.id===id){
            return{
                ...item,quantity:item.quantity - 1
            }
        
        }
        return item

    })

    localStorage.setItem('cart',JSON.stringify(decrement)) 
    navigate('/cart')

}

function HandleRemove(id){
    const removeitem=carts.filter(item=>item.id !== id)
    localStorage.setItem('cart',JSON.stringify(removeitem))
    navigate('/cart')

}
    return(
<>
<div className="card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">items:{carts?.length}</div>
                        </div>
                    </div>    
                   
                 {
                    carts.map((cart)=>{


return(

<div className="row border-top border-bottom">
<div className="row main align-items-center">
    <div className="col-2"><img className="img-fluid" src={cart?.image}/></div>
    <div className="col">
        <div className="row text-muted">{cart?.title}</div>
        <div className="row">{cart?.category}</div>
    </div>
    <div className="col">
        <a href="#" onClick={()=>Handledec(cart?.id)}>-</a><a href="#" className="border">{cart?.quantity}</a><a href="#" onClick={()=>Handleinc(cart?.id)}>+</a>
    </div>
    <div className="col">$<span className="ml-5"></span>{cart?.price * cart?.quantity}<Link onClick={()=>HandleRemove(cart?.id)} className="ml-5 color-yellow-500">Remove</Link></div>
</div>
</div>
)
                    })
                 }
                  
                    <div className="back-to-shop"><Link to={"/products"} ><span className="text-muted">Back to shop</span></Link></div>
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col" style={{paddingLeft:"0"}}>ITEMS:{carts?.length}</div>
                        <div className="col text-right">$:{totalprice}</div>
                    </div>
                    <form>
                        <p>SHIPPING</p>
                        <select><option className="text-muted">Standard-Delivery- &euro;5.00</option></select>
                        <p>GIVE CODE</p>
                        <input id="code" placeholder="Enter your code"/>
                    </form>
                    <div className="row" style={{borderTop: "1px", borderTop:"solid", padding:"2hv"}}>
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">${totalprice +5}</div>
                    </div>
                    <button className="btn">CHECKOUT</button>
                </div>
            </div>
            
        </div>       
        </>
    )
}
export default Cart;    