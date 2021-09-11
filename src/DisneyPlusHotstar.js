import React, { useEffect } from 'react'
// import AuthorisedUser from './AuthorisedUser'
// import UnAuthorisedUser from './UnAuthorisedUser'
import {login,logout,selectUser} from "./features/userSlice"
import {useDispatch,useSelector} from "react-redux"
import {auth} from "./config/firebase"
import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Header from './Header'
import Landing from './Landing'
import Login from './Login'
import Banner from './Banner'
import Slider from "./Slider"
import Row from './Row'
import Footer from './Footer'
import requests from './requests'
import  { Redirect } from 'react-router-dom'
// import Pagenotfound from './Pagenotfound'



const DisneyPlusHotstar = () => {
    const dispatch=useDispatch()
    const user=useSelector(selectUser)
    useEffect(()=>{
       const unsubscribe= auth.onAuthStateChanged((authUser)=>{
            if(authUser){
                //logged in
                dispatch(login({
                    uid:authUser.uid,
                    photo:authUser.photoURL,
                    email:authUser.email,
                    displayName:authUser.displayName

                }))
               

            }else{
                // logged out
                dispatch(logout())
            }
        })
        return unsubscribe;

    },[dispatch])


    return (
        <Router>
            <Switch>

                {!user ? (
                    <>

                    <Route exact path="/">
                        <Header />
                        <Landing />
                    </Route>

                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Redirect to='/'/>
                   

                   </>

                ) : (
                    <>
                     <Route exact path="/disney-hotstar">
                        <Header />
                        <Banner />
                        <Slider />
                        <Row title="Tranding Now" fetchUrl={requests.fetchTreding}  />
                        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}  />
                        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}  />
                        <Row title="Horrar Movies" fetchUrl={requests.fetchHorroMovies}  />
                        <Row title="Romance Movies" fetchUrl={requests.fetchRomanticMovies}  />
                        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}  />
                        <Footer />
                    </Route>

                  <Redirect to='/disney-hotstar'/>
                 

                    </>

                )
                }
              
               
         
            </Switch>
        </Router>
    );
}

export default DisneyPlusHotstar

// {user?(
//     <AuthorisedUser />
// ):(
//     <UnAuthorisedUser />
// )}