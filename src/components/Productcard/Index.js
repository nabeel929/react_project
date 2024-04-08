import React from "react";
import { Link } from "react-router-dom";

function Productcard({ products=[]}) {

    return (
        <>

            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">



                        {
                            products.map((product) => {
const{id,title,image,category,description,price}=product;
                                return (
                                    <>
                                        <div key={id} className="lg:w-1/4 md:w-1/2 p-5 w-full   shadow-lg">
                                            <Link to={`/products/${id}`} className="block relative h-48 rounded overflow-hidden">
                                                <img alt={title} className="object-contain object-center w-full h-full block cursor-pointer" src={image} />
                                            </Link>
                                            <div className="mt-4">
                                                <h3 className="text-yellow-600 text-md tracking-widest title-font mb-1">{category}</h3>
                                                <h2 className="text-gray-900 title-font text-lg font-medium">{title}</h2>
                                                <p className=" text-green-500 mt-1 text-lg font-bold">${price}</p>
                                            </div>
                                        </div>

                                    </>
                                )
                            })
                        }



                    </div>
                </div>

            </section>
        </>
    )
}
export default Productcard;