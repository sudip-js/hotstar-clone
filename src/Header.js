import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import { Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {selectUser} from "./features/userSlice"
import { auth } from './config/firebase'
// import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'



const Header = () => {
   const user = useSelector(selectUser)
//    let history = useHistory();

   const signOut=()=>{
       auth.signOut()
    //    history.push("/")
    return <Redirect to="/" />
   }

    return (
        <header className=" bg-headerColor sticky inset-0 z-50  text-white h-14 flex justify-between items-center px-6 lg:h-20 ">
                <div className="   header-left flex items-center space-x-2  ">
                        {
                            user &&  <div className="  cursor-pointer mr-2 lg:mr-4">
                            <MenuIcon className=" h-6 w-6 text-gray-400" />
                        </div>
                        }
                       
                         <div className=" mb-3 cursor-pointer">
                             <img src="./images/disneyhotstar.svg" className=" object-contain  h-10 w-32 lg:h-16 lg:w-40 " alt="Disney Hotstar" />
                         </div>

                       {
                           user &&  <div className='hidden lg:inline-block'>
                           <div className=" flex items-center space-x-9 px-6">
                              
                               <p>TV</p>
                               <p>Movies</p>
                               <p>Sports</p>
                               <p>Premium</p>
                               <p>Disney+</p>
                               <p className=" text-yellow-400 font-extrabold tracking-wider">Kids</p>
                           </div>
                       </div>
                       }
                   
                 </div>

                <div className="   header-right flex py-2 px-6 items-center  ">

                      {
                          user &&   <div className=" hidden lg:inline-block">
                          <div className=" flex items-center cursor-text mr-4">
                              <input type="text" placeholder="Search" className=" relative bg-headerColor outline-none border-b-2 border-gray-400 leading-8 text-gray-500 font-bold text-base" />
                                  
                                  <div className=" absolute pl-48">
                                  <SearchIcon className=" h-4 w-4 text-gray-400" />
                                  </div>

                          </div>
                   </div>
                      }

                         {
                             user &&  <div className="  lg:inline-block">
                             <button className=" bg-subscribe_btn font-bold mb-2 lg:mb-0  text-xs py-1 px-2 rounded uppercase lg:py-2 lg:px-4 cursor-pointer lg:">subscribe</button>
                         </div>

                         }
                         
                         <div className="   ml-4 lg:ml-0">
                         {!user ? (
                              <Link to="/login"><h1 className="focus:outline-none mx-4 my-1 uppercase font-semibold text-base tracking-wider cursor-pointer -mr-6  " >login</h1></Link>
                         ) : (
                           <span className="" onClick={(e)=>signOut(e)}>
                            <img src="../../images/profileicon.svg" alt="logout" className=" ml-20   cursor-pointer h-8 mb-2 lg:mb-0  lg:ml-3"  />
                          
                          </span>
                         ) }
                        </div> 
                        
                       
                </div>

        </header>

    )
}


export default Header
