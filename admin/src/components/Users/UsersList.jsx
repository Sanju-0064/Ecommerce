import NavBar from "../Utils/NavBar";
import Sidebar from "../Utils/Sidebar";
import Footer from "../Utils/Footer";
import { useEffect, useState } from "react";
import { usersList, decactivateUser, deleteUser } from "../../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UsersList = () => {
  const [list, setList] = useState([]);
  const [id, setId] = useState("");
  const [status, setStatus] = useState(null);

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
  const fetchUsers = async () => {
    let result = await usersList({});
    if (result.success) {
      setList([...result.response]);
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };
  useEffect(() => {
    avtivate("usersNav");
    fetchUsers();
  }, []);

  const handleDeactivateUser = async () => {
    let result = await decactivateUser({ id, status });
    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
      });
      fetchUsers();
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    setId("");
    setStatus(null);
  };
  const handleDeleteUser = async () => {
    let result = await deleteUser({ id, status });
    if (result.success) {
      toast.success(result.message, {
        position: "top-right",
        autoClose: 2000,
      });
      fetchUsers();
    } else {
      toast.error("Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
      });
    }
    setId("");
    setStatus(null);
  };

  return (
    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <NavBar />
          <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
              <h4 className="py-3 mb-4">
                <span className="text-muted fw-light"></span>Users
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
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody className="table-border-bottom-0">
                      {list && list.length > 0 ? (
                        list.map((value, index) => (
                          <tr key={index}>
                            <td>{value.name} </td>
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
                            <td>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn p-0 dropdown-toggle hide-arrow"
                                  data-bs-toggle="dropdown"
                                >
                                  <i className="bx bx-dots-vertical-rounded" />
                                </button>
                                <div className="dropdown-menu">
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deactivateModal"
                                    onClick={(e) => {
                                      setId(value._id);
                                      setStatus(!value.isDeactivated);
                                    }}
                                  >
                                    <i className="bx bx-block me-2" />{" "}
                                    {value.isDeactivated
                                      ? "Activate"
                                      : "Deactivate"}
                                  </a>
                                  <a
                                    className="dropdown-item"
                                    href="javascript:void(0);"
                                    data-bs-toggle="modal"
                                    data-bs-target="#deleteModal"
                                    onClick={(e) => {
                                      setId(value._id);
                                      setStatus(true);
                                    }}
                                  >
                                    <i className="bx bx-trash me-2" /> Delete
                                  </a>
                                </div>
                              </div>
                            </td>
                          </tr>
                        ))
                      ) : (
                        <tr className="text-center">
                          <td colSpan="12">No record found .</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
              {/*/ Basic Bootstrap Table */}
              <hr className="my-5" />
            </div>
            <div
              className="modal fade dialog-pop"
              id="deactivateModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title " id="exampleModalLabel2"></h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={(e) => {
                        setId("");
                        setStatus(null);
                      }}
                    />
                  </div>
                  <div className="modal-body text-center">
                    Are you sure you want to perform this action?
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                      onClick={(e) => {
                        setId("");
                        setStatus(null);
                      }}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleDeactivateUser}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="modal fade dialog-pop"
              id="deleteModal"
              tabIndex={-1}
              aria-hidden="true"
            >
              <div className="modal-dialog modal-sm" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title " id="exampleModalLabel2"></h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                      onClick={(e) => {
                        setId("");
                        setStatus(null);
                      }}
                    />
                  </div>
                  <div className="modal-body text-center">
                    Are you sure you want to perform this action?
                  </div>
                  <div className="modal-footer justify-content-center">
                    <button
                      type="button"
                      className="btn btn-outline-secondary"
                      data-bs-dismiss="modal"
                      onClick={(e) => {
                        setId("");
                        setStatus(null);
                      }}
                    >
                      No
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-dismiss="modal"
                      onClick={handleDeleteUser}
                    >
                      Yes
                    </button>
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

export default UsersList;
