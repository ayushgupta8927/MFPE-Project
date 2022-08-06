import React,{useState,useEffect} from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './Home.css'
import Tilt from 'react-parallax-tilt';

import {AiFillLike} from 'react-icons/ai'
const ViewEmployee=() =>{
  const [data,setData]=useState([]);
  const [filter,setFilter]=useState(data);
  const [loading,setLoading] = useState(false);
  let componentMounted=true;
  useEffect(() => {
    const getProducts=async ()=>{
      setLoading(true);
      // const response=await fetch("https://fakestoreapi.com/products");
      const response=await fetch("https://localhost:5005/api/Employee/GetEmployeeList")
      if(componentMounted){
        setData(await response.clone().json()); 
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
        // console.log(response)
      }
      return ()=>{
        componentMounted=false;
      }
    }
    getProducts();
  }, []);
  const Loading=()=>{
    return(
      <>
      <div className='col-md-3'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
      <Skeleton height={350}/>
      </div>
      <div className='col-md-3'>
      <Skeleton height={350}/>
      </div>
      </>
    );
  };
  const ShowProducts = () =>{
    return(
      <>
    {filter.map((product) =>{
      return(
        <>
        <div className=' box col-lg-3 col-sm-6 col-md-3 mb-4'>
          {/* <div className="card h-100 text-center p-4" key={product.id}> */}
          <div className="card h-100 bg-dark text-center p-4" key={product.employeeId}>
            <Tilt><img src={"user.png"} className="card-img-top" alt={product.employeeName} height="300px" /></Tilt>
            <div className="card-body">
                <h5 className="card-title mb-0">{product.employeeName}</h5>
                <h6 className="card-title mb-0 text-light">EmployeeId :&nbsp;{product.employeeId}</h6>

                {/* <p className="card-text">{product.category}</p>
                <p className="card-text">Posted Date: &nbsp; {product.openedDate.substring(0,10)}</p>
              
                
                <p className="card-text"><i className="like btn btn-primary btn-outline-light"><AiFillLike/>{product.likes}</i>Posted by <b>Emp Id:&nbsp;{product.employeeId}</b></p> */}
                {/* <a  href="#" className="btn btn-primary">View Details</a> */}
            </div>
           </div>
        </div>
        </>
      )
    })}
    </>)
  }
  return (
    <div>
      <div className='container my-5 '></div>
      <div className='row'>
        <div className='col-12 mb-5'>

          <h1 className='display-6 fw-bolder text-center'>Recent Products</h1><hr/>
        </div>
      </div>
      <div className='row justify-content-center'>
        {loading?<Loading/>:<ShowProducts/>}
      </div>
    </div>
  );
  
  }

export default ViewEmployee;