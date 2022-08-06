import React, { useState } from 'react';
// import "react-table-6/react-table.css";
import {  Col, Form, Row, FormGroup, Button } from 'reactstrap';
// import Navbar from '../Components/Navbar/Navbar';
import {AiFillLike} from 'react-icons/ai'
import Tilt from 'react-parallax-tilt';


function ViewMostLikedOffers() {
    const ProductsByLike = [];
    const employeeID = React.createRef();
    // const details = React.createRef();
    // const offerId = React.createRef();
    // const offerId = React.createRef();
    
    // const employeeId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    const [boolean, setboolean] = useState(false);
    async function OnSubmit() {
        // const OfferId = offerId.current.value;
        const EmployeeID = employeeID.current.value;

        // const EmployeeId = employeeId.current.value;
        // console.log(OfferId);
        await fetch(`https://localhost:5005/api/Employee/ViewMostLikedOffers/${EmployeeID}`)
            .then(response => response.json())
            .then(
                (result) => {
                    // ProductsByLike.push(result);
                    console.log(result)
                    setGetResult([...result]);
                    setboolean(true);
                },
                (error) => {
                    alert("Some Error Occured During Fetching");
                }
            )
            document.getElementById("base").style.display = "none";
        };
  return (
    
    <div>

    <div>
        <h4 align="center">Most Liked Offers</h4>
        <Form id='base' className='px-5'>
            <Col>
                <FormGroup row>
                    <label htmlFor="EmployeeID">EmployeeID</label>
                    <Col sm={10}>
                        <input type="text" name="EmployeeID" ref={employeeID} placeholder="EmployeeID" />

                    </Col>
                </FormGroup>
            </Col>
            <Col>
                <FormGroup row>
                    <Col sm={5}>
                    </Col>
                    <Col sm={1}>
                        <button type="button" onClick={() => OnSubmit()} className="btn btn-success">Submit</button>
                    </Col>
                    <Col sm={1}>
                        <button type="button" className="btn btn-danger">Cancel</button>{' '}
                    </Col>
                    <Col sm={5}>
                    </Col>
                </FormGroup>
            </Col>
        </Form>
    </div>
    <div>   
     {boolean &&
                    getResult.map((product) => {
                        return (
                            <>
                                <div className=' box   col-lg-3 col-sm-6 col-md-3 mb-4'>
                                    {/* <div className="card h-100 text-center p-4" key={product.id}> */}
                                    <div className="card h-100 border border-danger text-center " key={product.offerId}>
                                        <img src={"user.png"} className="card-img-top" alt={"Employee ID"+product.employeeID} height="250px" />
                                        <div className="card-body">

                                            {/* <p className="card-title mb-0"><b>Points:</b>&nbsp; {product.noOfPoints}</p> */}
                                            <h6 className="card-title mb-0 text-success"><b>Employee Id:</b> {product.employeeId}</h6>
                                            <p className="card-text mb-0 text-success"><b>Offer Id &nbsp;</b>{product.offerId}</p>
                                            <h3 className="card-text bg-danger text-white">{product.details}</h3>
                                            <p className="card-text"><i className="like btn btn-primary btn-outline-light"><AiFillLike />{product.likes}</i>{product.status}</p>
                                            {/* <a  href="#" className="btn btn-primary">View Details</a> */}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}

            
            </div> 
    </div >
  );
}

export default ViewMostLikedOffers;