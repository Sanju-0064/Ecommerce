import NavBar from "../Utils/NavBar";
import Sidebar from "../Utils/Sidebar";
import Footer from "../Utils/Footer";
import { useEffect } from "react";
const AddUser = () => {
  const avtivate = (id) => {
    const elements = document.querySelectorAll(".menu-item");
    elements.forEach((element) => {
      element.classList.remove("active");
      element.classList.remove("open");
    });

    // Add active class to the clicked element
    const clickedElement = document.getElementById(id);
    if (clickedElement) {
      clickedElement.classList.add("active");
      clickedElement.classList.add("open");
    }
  };

  useEffect(() => {
    avtivate("usersNav");
  }, []);

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <NavBar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light"></span>Add user
              </h4>
              <div className="row">
                {/* single card  */}
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-widget-separator-wrapper">
                      <div className="card-body card-widget-separator">
                        <div className="row gy-4 gy-sm-1">
                          <div className="col-sm-6 ">
                            <label
                              className="form-label"
                              htmlFor="basic-default-fullname"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-default-fullname"
                              placeholder="John Doe"
                            />
                            <div class="invalid-feedback"> Please enter your name. </div>
                          </div>
                          <div className="col-sm-6 ">
                            <label
                              className="form-label"
                              htmlFor="basic-default-fullname"
                            >
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="basic-default-fullname"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AddUser;
