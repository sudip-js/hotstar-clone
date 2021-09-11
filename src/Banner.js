import React,{useState,useEffect} from 'react'
import axios from "./axios"
import requests from "./requests"

const baseUrl = "https://image.tmdb.org/t/p/original";

const Banner = () => {
    const [banner,setBanner]=useState([])
    useEffect(()=>{
        async function fetchData(){
            const res=await axios.get(requests.fetchNetFlixOriginals)
            setBanner(res.data.results[
                Math.floor(Math.random()*res.data.results.length-1)
            ])
            return res;
        }
        fetchData()
    },[])
 
    
    return (
        
        <section className="  md:hidden lg:hidden" >
            <div className='   flex flex-col justify-center space-y-2 py-3 px-2 pb-10  lg:flex lg:flex-row-reverse'>
                <div className=" w-full  lg:mx-5">
                    <img src={`${baseUrl}${banner?.poster_path||banner?.backdrop_path}`} 
                    className=" border-2 border-gray-600 border-opacity-100 rounded h-48 object-cover object-top w-full" alt="horrar" />
                </div>
                {/* <div className=" grid grid-cols-2 gap-1"> */}
                 <div className=' flex justify-between items-center lg:flex lg:flex-col  lg:space-y-4  '>

                    <div className="  px-1 h-16 w-44 flex items-center justify-between space-x-2 ">
                        <div className= "">
                        <img src="../../images/disneylogomobile.png" className=" h-9 rounded  " alt="" />
                        </div>
                        <div className="   ">
                            <h1 className=" text-sm">{banner?.name||banner?.original_name}</h1>
                            <h1 className=" text-gray-300 text-xs">Start in {banner?.first_air_date}</h1>
                        </div>
                    </div>

                    <p className=" hidden lg:inline-block  max-w-xs px-12  ">Get set for horrar flim Sonia Albizuri, Miss Jane.Releasing on Oct.10. </p>



                    <div className="  text-center ">
                        <button  className="  border-2 rounded border-subscribe_btn border-opacity-70 text-subscribe_btn text-sm py-2  px-6 uppercase font-normal lg:px-8 lg:py-1 ">watch trailer</button>
                       
                    </div>

                </div>
               
            </div>
        </section>
    )
}

export default Banner
