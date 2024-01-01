import React from "react";
import Records from "./Records";

function Reviews(props) {
    const mode = props.mode;
  return (
    <>
      <div className="container">
        <Records mode={mode}/>
        <h1 className={`text-center mt-3 text-${mode ? "dark" : "light"}`}>Share Your Experience</h1>
        <div className={`row text-${mode ? "dark" : "light"}`}>
          <div className="col-md-6">
            <div>
              <div className={`mb-4 mt-3`}>
              <label for="nameFormControlInput1" className={`form-label`}>
                  Name :
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="nameFormControlInput1"
                  placeholder=""
                />
                </div>
              <div className="mb-4">
                <label for="exampleFormControlInput1" className="form-label">
                  Email :
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder=""
                />
              </div>
              <div className="mb-4">
                <label for="exampleFormControlTextarea1" className="form-label">
                  Review :
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="6"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary float-end mb-4">Submit</button>
            </div>
          </div>
          <div className="col-md-6 d-none d-md-block">
            <img src="review.svg" className="img-fluid d-block mx-auto my-3 ps-4 me-5" style={{maxHeight:"400px"}}></img>
          </div>
        </div>
          <h6 className="mt-5">This Page Is Under Process...</h6>
      </div>
    </>
  );
}

export default Reviews;
