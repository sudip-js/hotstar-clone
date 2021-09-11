// import React from 'react'
// import { BrowserRouter as Router,Switch,Route} from 'react-router-dom'
// import Header from './components/Header'
// import Landing from './components/Landing'
// import Login from "./components/login/Login"
// import {useSelector} from "react-redux"
// import {selectUser} from "./features/userSlice"

// const UnAuthorisedUser = () => {
//   const user=useSelector(selectUser)

//     return (

//         <Router>
//           <div className="App">
        
//          {!user &&
//             <Switch>

//                   <Route  exact path="/">
//                   <Header />
//                   <Landing />
//                   </Route>
//                   <Route exact path="/login" component={Login} />

//           </Switch>
            
//           }
           
//           </div>
//       </Router>
        
//     )
// }

// export default UnAuthorisedUser
