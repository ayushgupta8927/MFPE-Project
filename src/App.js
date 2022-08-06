import './App.css';
import React,{useState,useEffect, useContext} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './pages/Home';
import Add from './pages/Add';
import Login from './Components/Login/Login';
import Offers from './pages/Offers';
import AddProduct from './pages/AddProduct';
import ShowProductById from './pages/ShowProductById';
import ShowProductByTopLikes from './pages/ShowProductByTopLikes';
import ShowProductByCategory from './pages/ShowProductByCategory';
import ShowProductByPostedDate from './pages/ShowProductByPostedDate';
import EditOffer from './pages/EditOffer';
import AuthContext from './Components/AuthContext.jsx';
import ViewEmployeeOffers from './pages/ViewEmployeeOffers';
import GetPointsList from './pages/GetPointsList';
import ViewMostLikedOffers from './pages/ViewMostLikedOffers';
import PageNotFound from './Components/PageNotFound';
import EngageOffer from './pages/EngageOffer';
import LikeOffer from './pages/LikeOffer';
import ViewEmployee from './pages/ViewEmployee';
import ViewPointsByID from './pages/ViewPointsByID';
import RefreshPointOfEmployee from './pages/RefreshPointOfEmployee';
// import {setloggedIn} from './Components/Login/Login'
// const { loggedIn } = useContext(AuthContext);

function App() {
  // const { loggedIn } = useContext(AuthContext);
  // const [loggedIn, setLoggedIn] = useState(true);
  // useEffect(() => {
  //   if(localStorage.getItem('token')){
  //     setLoggedIn(true);}
  //   else
  //   setLoggedIn(true);
  // }, []);
// if(localStorage.getItem('token')){
//   setLoggedIn(true);}
// else
// setLoggedIn(false);
  return (
    <>
    <Router>
        <Navbar />
        {/* {loggedIn===false&&(
          <Routes>
                      <Route path='/' element={<Login/>} />
                      <Route path='*' element={<PageNotFound/>} />
          </Routes>
        )}
        {loggedIn==true &&( */}
        <Routes>
          <Route path='/Home' exact element={<Home/>} />
          <Route path='/add' element={<Add/>} />
          <Route path='/edit' element={<EditOffer/>} />
          <Route path='/products' element={<Offers/>} />
          <Route path='/' element={<Login/>} />
          <Route path='/ViewPointsById' element={<ViewPointsByID/>} />
          <Route path='*' element={<PageNotFound/>} />
          <Route path='/employee' element={<ViewEmployee/>}/>
          <Route path='/AddProduct' element={<AddProduct/>}/>
          <Route path='/AddProduct' element={<AddProduct/>}/>
          <Route path='/engageOffer' element={<EngageOffer/>}/>
          <Route path='/likeOffer' element={<LikeOffer/>}/>
          <Route path='/ShowProductById' element={<ShowProductById/>}/>
          <Route path='/ShowProductByCategory' element={<ShowProductByCategory/>}/>
          <Route path='/ShowProductByPostedDate' element={<ShowProductByPostedDate/>}/>
          <Route path='/ShowProductByTopLikes' element={<ShowProductByTopLikes/>}/>
          <Route path='/ViewEmployeeOffers' element={<ViewEmployeeOffers />} />
          <Route path='/ViewMostLikedOffers' element={<ViewMostLikedOffers />} />
          <Route path='/RefreshPoint' element={<RefreshPointOfEmployee/>} />

          {/* <Route path='/GetPointsList' element={<GetPointsList />} /> */}
          {/* <Route path='/ShowProductByTopLikes' element={<ShowProductByTopLikes/>}/> */}

        </Routes>
        {/* ) } */}
        </Router>

       
      </>
  );
}

export default App;
