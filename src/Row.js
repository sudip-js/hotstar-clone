import React,{useState,useEffect} from 'react'
import axios from "./axios"

const baseUrl = "https://image.tmdb.org/t/p/original";

const Row = ({title,fetchUrl}) => {
    const [movies,setMovies]=useState([])
    useEffect(()=>{
        async function fetchData(){
         const request=await axios.get(fetchUrl)
        //  console.log(request.data.results)
         setMovies(request.data.results)
         return request;

        }
        fetchData()
    },[fetchUrl])

    return (

     <div className=" pb-8 lg:pb-20 lg:px-12 lg:mt-2 lg:p-0">
        <section className="">
           
                <div className=" flex flex-col space-y-1">
                    <div className=' px-1  flex justify-between items-center lg:px-0'>
                        <h1 className=' text-lg font-medium'>{title}</h1>
                        <h1 className=" uppercase text-sm font-medium text-subscribe_btn opacity-100">more</h1>
                     </div>
                  
                  <div className="posters px-1 py-2 flex space-x-2  overflow-y-hidden  overflow-x-scroll lg:px-0 ">

                    {movies.map((movie)=>(
                           
                                <img 
                                src={`${baseUrl}${movie?.poster_path}`} 
                                alt={movie?.name}
                                className=" rounded-lg h-40 w-28 object-cover lg:w-40 lg:h-56"
                                key={movie?.id} 
                                // onClick={}
                                />
                            
                    ))}
               
                  </div>
             </div>
          
        </section>  
        </div>
   
    )
}

export default Row





// {movies.map((movie)=>{
//     <img 
//     key={movie.id}
//     src={`${baseUrl}${movie.backdrop_path}`} 
//     className=" rounded-lg h-40 w-28 object-cover  lg:w-40 lg:h-56" 
//     alt={movie.name} />

// })}