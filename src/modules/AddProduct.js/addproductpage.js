import React, { useState } from "react";
import axios  from 'axios' 


function Additems() {
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');




  async function AddData() {

     const  items={price,category,image,description,title}


  const formData=new FormData();

  formData.append(image,"image");
formData.append(category,"category");
formData.append(description,"description");

formData.append(title,"title");
formData.append(price,"price");




 fetch("https://fakestoreapi.com/products",{
    method:"POST",
    body:formData
 
 
 
 
 
  })
  .then(resp=>{
    console.warn(resp)
  })
  .catch(err=>{
    console.warn(err)
  })
  
 console.warn(items)
 
    /*   headers:{
        "Content-type":"Application/json",
        "Accept":"Application/json"


    },
    body:JSON.stringify(items)
})
.then((response)=>{
    //console.warn(response)
})
.catch((error)=>{
  //  console.warn(error)
})
let result=await nabeel.json();
console.warn("result is",result)


*/







    }
    return (
        <>
            <section class="bg-gray-50 dark:bg-gray-900">
                <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" class="flex items-center mt-20 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                        Additems New
                    </a>
                    <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Create and account
                            </h1>
                            <form class="space-y-4 md:space-y-6" action="#" >
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title</label>
                                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                    <input type="file" files={image} onChange={(e) => setImage(e.target.files[0])} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  />
                                </div>
                                <div>
                                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                    <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"  />
                                </div>
                                <div>
                                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Category</label>
                                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                                </div>
                                <div>
                                    <label for="confirm-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                                    <input type="confirm-password" value={description} onChange={(e) => setDescription(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />                  </div>
                                <div class="flex items-start">


                                </div>
                                <button type="submit" onClick={AddData} class="w-full text-white bg-purple-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Add Data</button>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Additems;