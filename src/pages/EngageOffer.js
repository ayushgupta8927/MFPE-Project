// import Header from '../../Header/Header.js';
import React, { useState, useRef } from "react";
import axios from "axios";
import moment from "moment";
import { AiFillLike } from "react-icons/ai";
import Tilt from 'react-parallax-tilt';

import { Container, Col, FormGroup, Button } from "reactstrap";

const EngageOffer = () => {
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
  const [Boolean, setBoolean] = useState(false);
  const formatResponse = (res) => {
    return JSON.stringify(res, null, 2);
  };

  async function OnSubmitCreateOffer() {
    // console.log(propertyId.current.value);
    const postData = {
      employeeId: 101,
      OfferId: parseInt(offerId.current.value),
      Category: category.current.value,
      Status: status.current.value,
      Likes: 14,
      Details: "Laptop",
      PostedDate: "2022-08-03T10:41:13.578Z",
      // PostedDate: moment().format("YYYY-MM-DDThh:mm:ss.5782"),
      EngagedDate: "2022-08-03T10:41:13.578Z",
      // EngagedDate:  moment().format("DD-MM-YYYY hh:mm:ss"),
      ClosedDate: "2022-08-03T10:41:13.578Z",
    };

    // console.log(postData);

    await fetch("https://localhost:5001/api/Offer/EngageOffer", {
      method: "POST",
      headers: new Headers({
        Accept: "application/json",
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((data) => {
        setGetResult([data]);
        setBoolean(true);
        console.log(data);
      })
      .catch((error) => {
        console.log("error");
      });
  }

  return (
    <>
      <Container className='px-5'>
        <h4>Enter data</h4>
        <form>
          <Col>
            <FormGroup row>
              <label htmlFor="offerID">Offer Id</label>
              <Col sm={10}>
                <input
                  type="number"
                  name="offerId"
                  ref={offerId}
                  placeholder="Enter Offer Id"
                />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
                            <label htmlFor="details">Details</label>
                            <Col sm={10}>
                                <input type="text" name="details" ref={details} placeholder="Details of Product" />
                            </Col>
                        </FormGroup> */}
            <FormGroup row>
              <label htmlFor="category">Category</label>
              <Col sm={10}>
                <input
                  type="text"
                  name="category"
                  ref={category}
                  placeholder="Category"
                />
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
                <input
                  type="text"
                  name="status"
                  ref={status}
                  placeholder="Available/Engaged/Closed"
                />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
                            <label htmlFor="postedDate">Posted Date</label>
                            <Col sm={10}>
                                <input type="date" name="postedDate" ref={postedDate} placeholder="Posted Date" />
                            </Col>
                        </FormGroup> */}
            <FormGroup row>
              <label htmlFor="engagedDate">engaged Date</label>
              <Col sm={10}>
                <input
                  type="date"
                  name="engagedDate"
                  ref={engagedDate}
                  placeholder="engaged date"
                />
              </Col>
            </FormGroup>
            {/* <FormGroup row>
                            <label htmlFor="ClosedDate">ClosedDate</label>
                            <Col sm={10}>
                                <input type="date" name="ClosedDate" ref={closedDate} placeholder="Closed Date" />
                            </Col>
                        </FormGroup>
                         */}
          </Col>
          <Col>
            <FormGroup row>
              <Col sm={5}></Col>
              <Col sm={1}>
                <button
                  type="button"
                  onClick={() => OnSubmitCreateOffer()}
                  className="btn btn-success"
                >
                  Submit
                </button>
              </Col>
              <Col sm={1}>
                <Button color="danger">Cancel</Button>{" "}
              </Col>
              <Col sm={5}></Col>
            </FormGroup>
          </Col>
        </form>
        {Boolean && <div className="alert alert-warning" role="alert">{getResult}</div>}
      </Container>
    </>
  );
};
export default EngageOffer;
