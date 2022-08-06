import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Home.css";
import Tilt from "react-parallax-tilt";
// import Tilt from 'react-parallax-tilt';

import { AiFillLike } from "react-icons/ai";
const Products = () => {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      // const response=await fetch("https://fakestoreapi.com/products");
      const response = await fetch(
        "https://localhost:5001/api/Offer/GetOffersList/"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
        // console.log(response)
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return (
      <>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
        <div className="col-md-3">
          <Skeleton height={350} />
        </div>
      </>
    );
  };
  const ShowProducts = () => {
    return (
      <>
        {filter.map((product) => {
          return (
            <>
              <div className=" box col-lg-3 col-sm-6 col-md-4 mb-4">
                {/* <div class="card h-100 text-center p-4" key={product.id}> */}
                <Tilt scale={1.2}>
                  <div class="card h-100 text-center p-4" key={product.offerid}>
                    <img
                      src={"img.png"}
                      class="card-img-top"
                      alt={product.details}
                      height="300px"
                    />
                    <div class="card-body">
                      <h5 class="card-title mb-0">{product.details}</h5>
                      <h6 class="card-title mb-0 text-success">
                        {product.status}
                      </h6>

                      <p class="card-text">{product.category}</p>
                      <p class="card-text">
                        Posted Date: &nbsp;{" "}
                        {product.openedDate.substring(0, 10)}
                      </p>

                      <p class="card-text">
                        <i className="like btn btn-primary btn-outline-light">
                          <AiFillLike />
                          {product.likes}
                        </i>
                        Posted by <b>Emp Id:&nbsp;{product.employeeId}</b>
                      </p>
                      {/* <a  href="#" class="btn btn-primary">View Details</a> */}
                    </div>
                  </div>
                </Tilt>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div>
      <div className="container my-5 "></div>
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Recent Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
};

export default Products;
