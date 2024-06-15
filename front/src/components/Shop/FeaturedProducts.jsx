import React from "react";
import productImage from "../../assets/img/featur-1.jpg";
const FeaturedProducts = () => {
  return (
    <>
      <div className="col-lg-12">
        <h4 className="mb-3">Featured products</h4>
        <div className="d-flex align-items-center justify-content-start">
          <div className="rounded me-4" style={{ width: 100, height: 100 }}>
            <img src={productImage} className="img-fluid rounded" alt="" />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star" />
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <div className="rounded me-4" style={{ width: 100, height: 100 }}>
            <img src={productImage} className="img-fluid rounded" alt="" />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star" />
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-start">
          <div className="rounded me-4" style={{ width: 100, height: 100 }}>
            <img src={productImage} className="img-fluid rounded" alt="" />
          </div>
          <div>
            <h6 className="mb-2">Big Banana</h6>
            <div className="d-flex mb-2">
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star text-secondary" />
              <i className="fa fa-star" />
            </div>
            <div className="d-flex mb-2">
              <h5 className="fw-bold me-2">2.99 $</h5>
              <h5 className="text-danger text-decoration-line-through">
                4.11 $
              </h5>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center my-4">
          <a
            href="#"
            className="btn border border-secondary px-4 py-3 rounded-pill text-primary w-100"
          >
            View More
          </a>
        </div>
      </div>
    </>
  );
};

export default FeaturedProducts;
