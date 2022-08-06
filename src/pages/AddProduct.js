// import Header from '../../Header/Header.js';
import React, { useState, useRef } from 'react';
import axios from 'axios';
import moment from "moment";
import {AiFillLike} from 'react-icons/ai'
import Tilt from 'react-parallax-tilt';


import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';


const AddProduct = () => {

    const employeeId = React.createRef();
    const offerId = React.createRef();
    const status = React.createRef();
    const category = React.createRef();
    const postedDate = React.createRef();
    const engagedDate = React.createRef();
    const likes = React.createRef();
    const details = React.createRef();
    const closedDate = React.createRef();

    const [getResult, setGetResult] = useState(null);
    const [Boolean, setBoolean] = useState(false)
    const formatResponse = (res) => {
        return JSON.stringify(res, null, 2);
    }

    async function OnSubmitCreateOffer() {
        // console.log(propertyId.current.value);
        const postData = {
                employeeId:parseInt(employeeId.current.value),
                OfferId: parseInt(offerId.current.value),
                Category: category.current.value,
                Status: status.current.value,
                Likes: 0,
                Details: details.current.value,
                PostedDate: moment().format("DD-MM-YYYY hh:mm:ss"),
                EngagedDate:"2022-08-03T10:41:13.578Z",
                // EngagedDate:  moment().format("DD-MM-YYYY hh:mm:ss"),
                ClosedDate:  "2022-08-03T10:41:13.578Z",
        };

        console.log(postData);

        await fetch("https://localhost:5001/api/Offer/PostOffer", {
            method: 'POST',
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(postData)
        })
            .then(response => response.json())
            .then(data => {
                setGetResult([postData]);
                setBoolean(true);
                console.log(getResult);
              // console.log(data);
            })
            .catch(error => {
                console.log("error")
            });
    }


    return (
        <>
            <Container>
                <h4>Enter data</h4>
                <form>
                    <Col>
                        <FormGroup row>
                            <label htmlFor="EmployeeId">Employee Id</label>
                            <Col sm={10}>
                                <input type="number" name="EmployeeId" ref={employeeId} placeholder="Enter Id like 110" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <label htmlFor="offerID">Offer Id</label>
                            <Col sm={10}>
                                <input type="number" name="offerId" ref={offerId} placeholder="Enter Offer Id" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <label htmlFor="details">Details</label>
                            <Col sm={10}>
                                <input type="text" name="details" ref={details} placeholder="Details of Product" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <label htmlFor="category">Category</label>
                            <Col sm={10}>
                                <input type="text" name="category" ref={category} placeholder="Category" />
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <label htmlFor="likes">Likes</label>
                            <Col sm={10}>
                                <input type="number" name="likes" ref={likes} placeholder="Likes" />
                            </Col>
                        </FormGroup> */}
                        <FormGroup row>
                            <label htmlFor="status">Status</label>
                            <Col sm={10}>
                                <input type="text" name="status" ref={status} placeholder="Available/Engaged/Closed" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <label htmlFor="postedDate">Posted Date</label>
                            <Col sm={10}>
                                <input type="date" name="postedDate" ref={postedDate} placeholder="Posted Date" />
                            </Col>
                        </FormGroup>
                        {/* <FormGroup row>
                            <label htmlFor="engagedDate">engaged Date</label>
                            <Col sm={10}>
                                <input type="date" name="engagedDate" ref={engagedDate} placeholder="engaged date" />
                            </Col>
                        </FormGroup>
                        <FormGroup row>
                            <label htmlFor="ClosedDate">ClosedDate</label>
                            <Col sm={10}>
                                <input type="date" name="ClosedDate" ref={closedDate} placeholder="Closed Date" />
                            </Col>
                        </FormGroup> */}
                        
                    </Col>
                    <Col>
                        <FormGroup row>
                            <Col sm={5}>
                            </Col>
                            <Col sm={1}>
                                <button type="button" onClick={() => OnSubmitCreateOffer()} className="btn btn-success">Submit</button>
                            </Col>
                            <Col sm={1}>
                                <Button color="danger">Cancel</Button>{' '}
                            </Col>
                            <Col sm={5}>
                            </Col>
                        </FormGroup>
                    </Col>
                </form>
                {Boolean && 
                 getResult.map((product) =>{
                  return(
                  <>
                  {/* {console.log()} */}
                  <div className=' box col-lg-3 col-sm-6 col-md-4 mb-4'>
                      {/* <div className="card h-100 text-center p-4" key={product.id}> */}
                      <div className="card h-100 text-center p-4" key={product.OfferId}>
                      <img src={"img.png"} className="card-img-top" alt={product.Details} height="300px" />
                      <div className="card-body">
                          <h5 className="card-title mb-0">{product.Details}</h5>
                          <h6 className="card-title mb-0 text-success">{product.Status}</h6>

                          <p className="card-text">{product.Category}</p>
                          {/* <p className="card-text">Posted Date: &nbsp; {product.openedDate.substring(0,10)}</p> */}
                          
                          
                          <p className="card-text"><i className="like btn btn-primary btn-outline-light"><AiFillLike/>{product.Likes}</i>Posted by <b>Emp Id:&nbsp;{product.employeeId}</b></p>
                          {/* <a  href="#" className="btn btn-primary">View Details</a> */}
                      </div>
                      </div>
                  </div>
                  </>
                  )
              })}
                {/* {getResult && <div className="alert alert-secondary mt-2" role="alert"><pre>{getResult}</pre></div>} */}

            </Container>
        </>
    );


};
export default AddProduct;

