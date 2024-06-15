import NavBar from "../Utils/NavBar";
import Sidebar from "../Utils/Sidebar";
import users from "../../assets/img/users.png";
import cities from "../../assets/img/new-city.jpg";
import Footer from "../Utils/Footer";
import { dashboard } from "../../services";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Dashboard = () => {
  const [activeUsers, setActiveUsers] = useState(0);
  const [inactiveUsers, setInactiveUsers] = useState(0);
  const [users, setUsers] = useState([]);
  const [activeCity, setActiveCity] = useState(0);
  const [activeProperty, setActiveProperty] = useState(0);
  
  const fetchDashboard = async () => {
    let result = await dashboard({});
    if (result.success) {
      setActiveUsers(result.response.activeUsers);
      setInactiveUsers(result.response.inactiveUsers);
      setUsers(result.response.users);
      setActiveCity(result.response.activeCity);
      setActiveProperty(result.response.activeProperty);

    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <NavBar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <div className="row">
                {/* single card  */}
                <div className="col-12">
                  <div className="card mb-4">
                    <div className="card-widget-separator-wrapper">
                      <div className="card-body card-widget-separator">
                        <div className="row gy-4 gy-sm-1">
                          <div className="col-sm-6 col-lg-3">
                            <div className="d-flex justify-content-between align-items-start card-widget-1 border-end pb-3 pb-sm-0">
                              <div>
                                <h3 className="mb-1">{activeUsers}</h3>
                                <p className="mb-0">Active Users</p>
                              </div>
                              <span className="badge bg-label-secondary rounded p-2 me-sm-4">
                                <i className="bx bx-user bx-sm" />
                              </span>
                            </div>
                            <hr className="d-none d-sm-block d-lg-none me-4" />
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="d-flex justify-content-between align-items-start card-widget-2 border-end pb-3 pb-sm-0">
                              <div>
                                <h3 className="mb-1">{inactiveUsers}</h3>
                                <p className="mb-0">Inactive Users</p>
                              </div>
                              <span className="badge bg-label-secondary rounded p-2 me-sm-4">
                                <i className="bx bx-error bx-sm" />
                              </span>
                            </div>
                            <hr className="d-none d-sm-block d-lg-none" />
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="d-flex justify-content-between align-items-start border-end pb-3 pb-sm-0 card-widget-3">
                              <div>
                                <h3 className="mb-1">0</h3>
                                <p className="mb-0">Active Categories</p>
                              </div>
                              <span className="badge bg-label-secondary rounded p-2 me-sm-4">
                                <i className="bx bx-building bx-sm" />
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-lg-3">
                            <div className="d-flex justify-content-between align-items-start">
                              <div>
                                <h3 className="mb-1">0</h3>
                                <p className="mb-0">Total Orders</p>
                              </div>
                              <span className="badge bg-label-secondary rounded p-2">
                                <i className="bx bx-home bx-sm" />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light">Latest Users</span>
              </h4>
              <div className="card">
                <h5 className="card-header">Users</h5>
                <div className="table-responsive text-nowrap">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Mobile</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {users && users.length > 0 ? (
                        users.map((value, index) => (
                          <tr>
                            <td>
                              <span className="fw-medium">{value.name}</span>
                            </td>
                            <td>{value.email}</td>
                            <td>{value.mobile}</td>
                            <td>
                              {value.isDeactivated ? (
                                
                                <span className="badge bg-label-danger me-1">
                                In-Active
                              </span>
                              ) : (
                                <span className="badge bg-label-success me-1">
                                  Active
                                </span>
                              )}
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td>
                            <span className="fw-medium"></span>
                          </td>
                          <td>
                            <span className="fw-medium"></span>
                          </td>
                          <td>
                            <span className="fw-medium">No record found</span>
                          </td>
                          <td>
                            <span className="fw-medium"></span>
                          </td>
                          <td>
                            <span className="fw-medium"></span>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/ Basic Bootstrap Table */}
              <hr className="my-5" />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
