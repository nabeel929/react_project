import React, { useEffect } from "react";


function Logout(){

    useEffect(()=>{

        localStorage.clear();

    },[])
alert("You have been logout successfully")

}
export default Logout;