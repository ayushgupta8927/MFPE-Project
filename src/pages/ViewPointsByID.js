import React, { useState,useEffect } from 'react';
// import "react-table-6/react-table.css";
import { Col, Form, Row, FormGroup, Button } from 'reactstrap';
// import Navbar from '../Components/Navbar/Navbar';
import { AiFillLike } from 'react-icons/ai'
import Tilt from 'react-parallax-tilt';

const items = JSON.parse(localStorage.getItem('Id'));


function ViewPointsByID( ) {
    const ProductsByLike = [];
    // const employeeId = React.createRef();
    // const details = React.createRef();
    // const offerId = React.createRef();
    // const offerId = React.createRef();
    // const employeeId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    const [boolean, setboolean] = useState(false);

    useEffect(() => {
        async function OnSubmit() {
            // const EmployeeID = employeeId.current.value;
            // const EmployeeId = employeeId.current.value;
            //console.log(OfferId);
            
    
            await fetch(`https://localhost:5007/api/Points/GetPointsByEmployeeId/${items}`)
            // await fetch(`https://localhost:5007/api/Points/GetPointsByEmployeeId/${localStorage.getItem('id')}`)
    
                .then(response => response.json())
                .then(
                    (result) => {
                        // ProductsByLike.push(result);
                        console.log(result)
                        setGetResult([result]);
                        setboolean(true);
                        
                    },
                    (error) => {
                        alert("Some Error Occured During Fetching");
                    }
                )
        };
        OnSubmit();
    }, [])
    
    // OnSubmit();
    return (

        <div>

{/* 
            <div>
                <h4 align="center">View Points</h4>
                <Form className='px-5'>
                    <Col>
                        <FormGroup row>
                            <label htmlFor="EmployeeID">Employee Id</label>
                            <Col sm={10}>
                                <input type="text" name="EmployeeID" ref={employeeId} placeholder="Employee ID" />

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
            </div> */}
            <div>
                {boolean &&
                    getResult.map((product) => {
                        return (
                            <>
                                <div className=' box col-lg-3 col-sm-6 col-md-3 mb-4 px-3'>
                                    {/* <div className="card h-100 text-center p-4" key={product.id}> */}
                                    <div className="card h-100 bg-dark text-center p-4" key={product.employeeId}>
                                        <img src={"user.png"} className="card-img-top" alt={"Employee ID"+product.employeeId} height="300px" />
                                        <div className="card-body">

                                            <p className="card-title text-light mb-0"><b>Points:</b>&nbsp; {product.totalPoints}</p>
                                            <h6 className="card-title mb-0 text-success"><b>Employee Id:</b> {product.employeeId}</h6>
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

export default ViewPointsByID