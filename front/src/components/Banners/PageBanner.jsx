import React from "react";

const PageBanner = (props) => {
  return (
    <>
      {/* Single Page Header start */}
      <div className="container-fluid page-header py-5">
        <h1 className="text-center text-white display-6">{props.name}</h1>
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Pages</a>
          </li>
          <li className="breadcrumb-item active text-white">{props.name}</li>
        </ol>
      </div>
      {/* Single Page Header End */}
    </>
  );
};

export default PageBanner;
