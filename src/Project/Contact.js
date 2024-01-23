import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="row">
        <div className="col-lg-6 col-sm-6 col-md-6">
          <h2 className="m-5">Contact Us</h2>
          <form>
            <div className="form-group">
              <label for="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                required
              />
            </div>{" "}
            <br></br>
            <div className="form-group">
              <lable for="email">Enter Mail ID:</lable>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                required
              />
            </div>{" "}
            <br></br>
            <div className="form-group">
              <label for="message">Message :</label>
              <textarea
                type="text"
                className="form-control"
                id="message"
                rows="3"
              ></textarea>
            </div>{" "}
            <br></br>
            <br></br>{" "}
            <button
              type="submit"
              className="btn text-success  btn-outline-dark"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-lg-6 col-sm-6 col-md-6 ">
          <h2 className="m-5">Contact</h2>
          <div>
            <h3>
              For more info call
            </h3>
            {/* <select>
              <option></option>
              <option>+91</option>
              <option>+143</option>
              <option>+123</option>
            </select>*/}+91 8739574652 
          </div> <br></br>
          <a href="#" className="text-dark" style={{ textDecoration: "none" }}>
            abc@gmail.com
          </a>{" "}
          <br></br>
          <div className="m-2 p-2">
            <a href="#" className="p-2">
              {" "}
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="" className="p-2">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="" className="p-2">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
