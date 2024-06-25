import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <div className="row align-items-center p-4" id="testimony">
      <h2>Testimonial</h2>
      <p>Berbagai review positif dari para pelanggan kami</p>
      <div id="carousel1" className="carousel carousel-dark slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="carousel-content">
              <div>
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545545/img_photo_sujwdn.png"
                  className="px-5 my-2"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545543/Rate_gqxm2k.png"
                  className="py-2"
                  alt=""
                />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <h6>John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <div>
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545545/img_photo_1_yoj9nr.png"
                  className="px-5 my-2"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545543/Rate_gqxm2k.png"
                  className="py-2"
                  alt=""
                />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <h6>John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="carousel-content">
              <div>
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545545/img_photo_1_yoj9nr.png"
                  className="px-5 my-2"
                  alt=""
                />
              </div>
              <div className="col-md-6">
                <img
                  src="https://res.cloudinary.com/dfoqkricj/image/upload/v1710545543/Rate_gqxm2k.png"
                  className="py-2"
                  alt=""
                />
                <p>
                  “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                </p>
                <h6>John Dee 32, Bromo</h6>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carousel1"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carousel1"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
