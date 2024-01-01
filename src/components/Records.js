import React from "react";

function Records(props) {
    const mode = props.mode;
  return (
    <>
      <div className={`container`}>
      <h1 className={`text-center mt-3 text-${mode ? "dark" : "light"}`}>Reviews</h1>
        <div className={`row row-cols-1 row-cols-md-3 g-4 pb-5`}>
          <div className="col">
            <div className={`card  my-3 text-bg-${mode ? "light" : "dark"}`}>
              <div className="card-body">
                <p className="card-text">
                <i className="bi bi-quote"></i>Some quick example text to build on the card title and make up the bulk of the card's content.<i className="bi bi-quote"></i>
                </p>
                <h6>
                  <i className="bi bi-person-circle me-1"></i>ABCD
                </h6>
                <h6>xyzx@gmail.com</h6>
              </div>
            </div>
          </div>
          {/* <div className="col">
              <div className={`card  my-3 text-bg-${mode ? "light" : "dark"}`}>
            <div className="card-body">
                <p className="card-text">
                  "Some quick example text to build on the card title and make
                  up the bulk of the card's content."
                </p>
                <h6>
                  <i className="bi bi-person-circle me-1"></i>Mustali Sadikot
                </h6>
                <h6>mustalisadikot@gmail.com</h6>
              </div>
            </div>
          </div>
          <div className="col">
        <div className={`card  my-3 text-bg-${mode ? "light" : "dark"}`}>
            <div className="card-body">
              <p className="card-text">
                "Some quick example text to build on the card title and make up
                the bulk of the card's content."
              </p>
              <h6><i className="bi bi-person-circle me-1"></i>Mustali Sadikot</h6>
              <h6 >mustalisadikot@gmail.com</h6>
            </div>
          </div>
          
        </div>
        <div className="col">
        <div className={`card  my-3 text-bg-${mode ? "light" : "dark"}`}>
            <div className="card-body">
              <p className="card-text">
                "Some quick example text to build on the card title and make up
                the bulk of the card's content."
              </p>
              <h6><i className="bi bi-person-circle me-1"></i>Mustali Sadikot</h6>
              <h6 >mustalisadikot@gmail.com</h6>
            </div>
          </div>
          
        </div> */}
        </div>
      </div>
    </>
  );
}

export default Records;
