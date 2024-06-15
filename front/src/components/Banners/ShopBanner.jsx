import React from "react";

import bannerImage from "../../assets/img/banner-fruits.jpg"

const ShopBanner = () => {
  return (
    <div className="col-lg-12">
      <div className="position-relative">
        <img
          src={bannerImage}
          className="img-fluid w-100 rounded"
          alt=""
        />
        <div
          className="position-absolute"
          style={{
            top: "50%",
            right: 10,
            transform: "translateY(-50%)",
          }}
        >
          <h3 className="text-secondary fw-bold">
            Fresh <br /> Fruits <br /> Banner
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
