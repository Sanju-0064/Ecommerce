import NavBar from "../Utils/NavBar";
import Sidebar from "../Utils/Sidebar";
import Footer from "../Utils/Footer";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIslogin, setUser } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../services";
const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userInfo.user);
  const [admin, setAdmin] = useState(user);
  const [err, setErr] = useState({});

  const handleUpdateProfile =async  () => {
    removeErrors();

    let errObj = new Object();
    if (admin.name === "") {
      errObj.name = "Please enter name.";
    }
    if (admin.mobile === "") {
      errObj.mobile = "Please enter mobile.";
    }
    if (admin.gender === "") {
      errObj.gender = "Please select gender.";
    }

    if (Object.keys(errObj).length > 0) {
      setErr(errObj);
      setErrors();
    } else {
      setErr({});
      let result = await updateProfile(admin);
      if(result.success){
        toast.success("Profile successfully updated.", {
            position: "top-right",
            autoClose: 2000,
        });
        dispatch(setUser({...result.response}))

      }else{
        toast.error("Sorry,Please try again later.", {
            position: "top-right",
            autoClose: 2000,
        });
        setAdmin(user);
      }
    }
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
                <span className="text-muted fw-light">Account /</span> My
                Profile
              </h4>
              <div className="row">
                <div className="col-md-12">
                  <div className="card mb-4">
                    <h5 className="card-header">Profile Details</h5>
                    {/* Account */}
                    {/* <div className="card-body">
                      <div className="d-flex align-items-start align-items-sm-center gap-4">
                        <img
                          src="../assets/img/avatars/1.png"
                          alt="user-avatar"
                          className="d-block rounded"
                          height={100}
                          width={100}
                          id="uploadedAvatar"
                        />
                        <div className="button-wrapper">
                          <label
                            htmlFor="upload"
                            className="btn btn-primary me-2 mb-4"
                            tabIndex={0}
                          >
                            <span className="d-none d-sm-block">
                              Upload new photo
                            </span>
                            <i className="bx bx-upload d-block d-sm-none" />
                            <input
                              type="file"
                              id="upload"
                              className="account-file-input"
                              hidden=""
                              accept="image/png, image/jpeg"
                            />
                          </label>
                          <button
                            type="button"
                            className="btn btn-outline-secondary account-image-reset mb-4"
                          >
                            <i className="bx bx-reset d-block d-sm-none" />
                            <span className="d-none d-sm-block">Reset</span>
                          </button>
                          <p className="text-muted mb-0">
                            Allowed JPG, GIF or PNG. Max size of 800K
                          </p>
                        </div>
                      </div>
                    </div> */}
                    <hr className="my-0" />
                    <div className="card-body">
                      <form
                        id="formAccountSettings"
                        method="POST"
                        action="javascript:void(0);"
                        onSubmit={handleUpdateProfile}
                      >
                        <div className="row">
                          <div className="mb-3 col-md-6">
                            <label htmlFor="name" className="form-label">
                              Name
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="name"
                              name="name"
                              value={admin.name}
                              autofocus=""
                              onChange={(e) => {
                                setAdmin((prevState) => ({
                                  ...prevState,
                                  name: e.target.value,
                                }));
                              }}
                            />
                            <div className="invalid-feedback">
                              {err.name || ""}
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label htmlFor="email" className="form-label">
                              E-mail
                            </label>
                            <input
                              className="form-control"
                              type="text"
                              id="email"
                              name="email"
                              value={admin.email}
                              readOnly
                            />
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="mobile">
                              Mobile Number
                            </label>

                            <input
                              type="text"
                              id="mobile"
                              name="mobile"
                              className="form-control"
                              maxLength={10}
                              minLength={10}
                              value={admin.mobile}
                              onChange={(e) => {
                                isNaN(e.target.value)
                                  ? ""
                                  : setAdmin((prevState) => ({
                                      ...prevState,
                                      mobile: e.target.value,
                                    }));
                              }}
                            />
                            <div className="invalid-feedback">
                              {err.mobile || ""}
                            </div>
                          </div>
                          <div className="mb-3 col-md-6">
                            <label className="form-label" htmlFor="gender">
                              Gender
                            </label>
                            <select
                              id="gender"
                              className="select2 form-select"
                              name="gender"
                              value={admin.gender}
                              onChange={(e) => {
                                setAdmin((prevState) => ({
                                  ...prevState,
                                  gender: e.target.value,
                                }));
                              }}
                            >
                              <option value="">Select Gender</option>
                              <option value="Male">Male</option>
                              <option value="Female">Female</option>
                            </select>{" "}
                            <div className="invalid-feedback">
                              {err.gender || ""}
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <button
                            type="submit"
                            className="btn btn-primary me-2"
                          >
                            Update
                          </button>
                        </div>
                      </form>
                    </div>
                    {/* /Account */}
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

function setErrors() {
  const elements = document.getElementsByClassName("invalid-feedback");
  for (const element of elements) {
    element.style.display = "block";
  }
}

function removeErrors() {
  const elements = document.getElementsByClassName("invalid-feedback");
  for (const element of elements) {
    element.style.display = "none";
  }
}

export default Profile;
