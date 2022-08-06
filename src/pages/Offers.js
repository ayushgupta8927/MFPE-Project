import React, { Component } from "react";
import { AiFillLike } from "react-icons/ai";
import { variables } from "../Variables";
import Tilt from "react-parallax-tilt";

export default class Offers extends Component {
  constructor(props) {
    super(props);
    this.state = { offer: [] };
  }
  refreshList() {
    // fetch('https://localhost:5001/api/Offer/GetOfferById/5')
    fetch(variables.API_URL + "Offer/GetOffersList/")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ offer: data });
      });
  }
  componentDidMount() {
    this.refreshList();
  }
  componentDidUpdate() {
    this.refreshList();
  }
  render() {
    const { offer } = this.state;

    return (
      <div>
        {offer.map((ofs) => {
          return (
            <>
              <div className=" box col-lg-3 col-sm-6 col-md-4 mb-4">
                <div className="card h-100 text-center p-4" key={ofs.offerId}>
                  <Tilt scale="1.2">
                    <img
                      src={"img.png"}
                      className="card-img-top"
                      alt={ofs.Category}
                      height="300px"
                    />
                  </Tilt>
                  <div className="card-body">
                    <h5 className="card-title mb-0">{ofs.details}</h5>
                    <p className="card-text">{ofs.Status}</p>
                    <i className="like">
                      <AiFillLike />
                      {ofs.Likes}
                    </i>
                    <a href="#" className="btn btn-primary">
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    );
  }
}
