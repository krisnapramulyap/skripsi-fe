import React from "react";

function Teamwork() {
  return (
    <section className="teamwork" style={{ marginBottom: "70px" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="teamwork__content--left">
              <figure className="mb-0">
                <img
                  src="assets/images/pexels-fauxels-3184183.jpg"
                  alt="asd"
                  className="teamwork__image"
                />
              </figure>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="teamwork__content--right">
              <h1>
                We Provide Good Stuff
                <span className="d-md-block"> and Healthy Meals</span>
              </h1>

              <p>
                You can explore the menu that we provide with fun and
                <span className="d-md-block">
                  have their own taste and make your day better.
                </span>
              </p>

              <div className="list">
                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>High quality Meat, fish and more..</span>
                </div>
                {/* <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>Healthy meals, you can request the ingredients</span>
                </div> */}
                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>
                    Chat with our staff to get better experience for ordering
                  </span>
                </div>
                <div className="list__item">
                  <figure className="mb-0 rounded-circle">
                    <img
                      src="assets/images/icons/icon-check.svg"
                      alt="t"
                      className="list__item--image"
                    />
                  </figure>

                  <span>
                    Free member card with a minimum purchase of IDR 40.000.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Teamwork;
