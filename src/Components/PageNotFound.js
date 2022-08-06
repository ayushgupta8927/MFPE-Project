import React, { PureComponent } from 'react'
import { useContext } from "react";
import AuthContext from './AuthContext.jsx'
// import MainLogin from './MainLogin';
// import Main from './Main';
import Home from '../pages/Home';
function PageNotFound()
{
    // const {loggedIn,getloggedin}=useContext(AuthContext)

    return(
        <>
        {/* {loggedIn===false &&<Home/>}
        {loggedIn===true && <Home/>} */}
        <h1>PageNotFound</h1>
        </>
    )
}

export default PageNotFound;