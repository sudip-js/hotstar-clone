import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Slider = () => {
    return (
        <section className=" lg:px-12 ">

                <div className=' lg:h-96  '>
                         <Carousel
                            autoPlay
                            infiniteLoop
                            showStatus={false}
                            showIndicators={false}
                            showThumbs={false}
                            interval={5000}
                          
                        >
                             <div className=" lg:flex">
                                 <div className=' lg:bg-black lg:w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/blue-valentine.jpg" alt="" />
                            </div>

                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/paw-patrol.jpg" alt="" />
                            </div>
                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/the-notebook.jpg" alt="" />
                            </div>
                            
                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/quite.jpg" alt="" />
                            </div>

                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/a-star-is-born.jpg" alt="" />
                            </div>

                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/juno.jpg" alt="" />
                            </div>

                            <div className=" flex">
                                 <div className=' bg-black w-w7'>
                                    
                                 </div>
                            <img className='h-48 lg:h-96  w-full object-cover  lg:object-contain rounded'  src="../../images/descpecable.jpg" alt="" />
                            </div>

                            



                            
                            



                            {/* <div>
                            <img className='h-48 lg:h-96 w-full object-contain rounded'  src="../../images/paw-patrol.jpg" alt="" />
                            </div>
                            <div>
                            <img className='h-48 lg:h-96 w-full object-contain object-top rounded'  src="../../images/the-notebook.jpg" alt="" />
                            </div>
                            <div>
                            <img className='h-48 lg:h-96  w-full object-contain rounded' src="../../images/quite.jpg" alt="" />
                            </div> 
                            <div>
                            <img className='h-48 lg:h-96  w-full object-contain rounded' src="../../images/" alt="" />
                            </div>
                            <div>
                            <img className='h-48 lg:h-96  w-full object-contain rounded' src="../../images/" alt="" />
                            </div>
                            <div>
                            <img className='h-48 lg:h-96  w-full object-contain rounded' src="../../images/" alt="" />
                            </div> */}
                        </Carousel>
                </div>
    
        </section>
    )
}

export default Slider

//lg:max-h-4 lg:h-h2 mt-2