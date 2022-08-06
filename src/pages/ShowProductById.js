import React, { useState } from 'react';
// import "react-table-6/react-table.css";
import {  Col, Form, Row, FormGroup, Button } from 'reactstrap';
// import Navbar from '../Components/Navbar/Navbar';
import {AiFillLike} from 'react-icons/ai'
import Tilt from 'react-parallax-tilt';


function ShowProductById() {
    const ProductsByLike = [];
    const offerId = React.createRef();
    // const details = React.createRef();
    // const offerId = React.createRef();
    // const offerId = React.createRef();
    
    // const employeeId = React.createRef();
    const [getResult, setGetResult] = useState(null);
    const [boolean, setboolean] = useState(false);
    async function OnSubmit() {
        const OfferId = offerId.current.value;
        // const EmployeeId = employeeId.current.value;
        console.log(OfferId);
        await fetch(`https://localhost:5001/api/Offer/GetOfferById/${OfferId}`)
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
  return (
    
    <div>

    <div>
        <h4 align="center">Offer by ID</h4>
        <Form className='px-5'>
            <Col>
                <FormGroup row>
                    <label htmlFor="OfferId">Offer Id</label>
                    <Col sm={10}>
                        <input type="text" name="OfferId" ref={offerId} placeholder="offer ID" />

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
            {   boolean &&
                    getResult.map((product) =>{
                        return (
                          <>
                            <div className=" box col-lg-3 col-sm-6 col-md-3 mb-4">
                              {/* <div className="card h-100 text-center p-4" key={product.id}> */}
                              <div
                                className="card h-100 text-center p-4"
                                key={product.offerid}
                              >
                                <img
                                  src={"img.png"}
                                  className="card-img-top"
                                  alt={product.details}
                                  height="300px"
                                />
                                <div className="card-body">
                                  <h5 className="card-title mb-0">
                                    {product.details}
                                  </h5>
                                  <h6 className="card-title mb-0 text-success">
                                    {product.status}
                                  </h6>

                                  <p className="card-text">{product.category}</p>
                                  <p className="card-text">
                                    Posted Date: &nbsp;{" "}
                                    {product.openedDate.substring(0, 10)}
                                  </p>

                                  <p className="card-text">
                                    <i className="like btn btn-primary btn-outline-light">
                                      <AiFillLike />
                                      {product.likes}
                                    </i>
                                    Posted by{" "}
                                    <b>Emp Id:&nbsp;{product.employeeId}</b>
                                  </p>
                                  {/* <a  href="#" className="btn btn-primary">View Details</a> */}
                                </div>
                              </div>
                            </div>
                          </>
                        );
                    })}
                    {// <div>
                    //     <h4 align="center">Business Property List</h4>
                    //     <table className="table table-striped" style={{ marginTop: 10, border: 2 }}>
                    //         <thead>
                    //             <tr>
                    //                 <th>Offer Id</th>
                    //                 <th>details</th>
                    //                 <th>Likes</th>
                    //                  <th>Status</th>
                    //                 <th>Category</th>
                    //                 <th>Opened Date</th>
                    //                 {/*<th>CostOfTheAsset</th>
                    //                 <th>SalvageValue</th>
                    //                 <th>UsefulLifeOfTheAsset</th>
                    //                 <th>PropertyValue</th> */}
                    //             </tr>
                    //         </thead>
                    //         <tbody>
                    //             {getResult.map(bp =>
                    //                 <tr key={bp.offerId}>
                    //                     <td>{bp.offerId}</td>
                    //                     <td>{bp.details}</td>
                    //                     <td>{bp.likes}</td>
                    //                     <td>{bp.status}</td>
                    //                     <td>{bp.category}</td>
                    //                     <td>{bp.openedDate}</td>
                    //                      {/* <td>{bp.buildingAge}</td>
                    //                     <td>{bp.costOfTheAsset}</td>
                    //                     <td>{bp.salvageValue}</td>
                    //                     <td>{bp.usefulLifeOfTheAsset}</td>
                    //                     <td>{bp.propertyValue}</td> */}
                    //                 </tr>
                    //             )}
                    //         </tbody>
                    //     </table>
                    // </div>
            } 
            </div> 
    </div >
  );
}

export default ShowProductById