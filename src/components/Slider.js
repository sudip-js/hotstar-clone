import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
        <section className="    lg:px-12">

                <div className=' md:h-72 lg:h-96  '>
                         <Carousel
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            interval={5000}
                          
                        >
                             <div className=" bg-black lg:flex ">
                                 <div className="  lg:w-96"></div>
                                 <img className=' h-48 md:h-72  lg:h-96   w-full object-cover  lg:object-cover rounded'  src="../../images/blue-valentine.jpg" alt="" />
                             </div>

                            <div className=" bg-black lg:flex  ">
                                <div className="  lg:w-96"></div>   
                                <img className='h-48 md:h-72 lg:h-96   w-full object-cover  lg:object-cover rounded'  src="../../images/paw-patrol.jpg" alt="" />
                            </div>
                            <div className="  bg-black lg:flex ">
                                <div className="  lg:w-96"></div>   
                                <img className='h-48  md:h-72 lg:h-96   w-full object-cover  lg:object-cover rounded'  src="../../images/the-notebook.jpg" alt="" />
                            </div>
                            
                            <div className=" bg-black lg:flex  ">
                                <div className="  lg:w-96"></div>    
                                <img className='h-48 md:h-72 lg:h-96    w-full object-cover  lg:object-cover rounded'  src="../../images/quite.jpg" alt="" />
                            </div>

                            <div className=" bg-black lg:flex  ">
                                <div className="  lg:w-96"></div>  
                                <img className='h-48 md:h-72 lg:h-96  w-full object-cover  lg:object-cover rounded'  src="../../images/a-star-is-born.jpg" alt="" />
                            </div>

                            <div className=" bg-black lg:flex  ">
                                <div className="  lg:w-96"></div>
                                <img className='h-48 md:h-72 lg:h-96   w-full object-cover  lg:object-cover rounded'  src="../../images/juno.jpg" alt="" />
                            </div>

                            <div className=" bg-black lg:flex  ">
                                <div className="  lg:w-96"></div>  
                                <img className='h-48 md:h-72 lg:h-96  w-full object-cover  lg:object-cover rounded'  src="../../images/descpecable.jpg" alt="" />
                            </div>
                        </Carousel>
                </div>
    
        </section>
    )
}

export default Slider

