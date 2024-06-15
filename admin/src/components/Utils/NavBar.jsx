import userIcon from "../../assets/img/user-icon.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIslogin, setUser } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const NavBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.userInfo.user);

  const handClickProfile = (id, uid) => {
    // Add active class to the clicked element
    const clickedElement = document.getElementById(id);
    if (clickedElement) {
      clickedElement.classList.toggle("show");
    }
    const clickedElement1 = document.getElementById(uid);
    if (clickedElement1) {
      clickedElement1.classList.toggle("show");
    }
  };
  const handleLogout = () => {
    toast.success("Logout suceess.", {
      position: "top-right",
      autoClose: 2000,
    });
    sessionStorage.clear();

    dispatch(setIslogin(false));
    dispatch(setUser({}));
    navigate("/");
  };
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a
            className="nav-item nav-link px-0 me-xl-4"
            href="javascript:void(0)"
          >
            <i className="bx bx-menu bx-sm" />
          </a>
        </div>
        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          {/* Search */}
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0" />
              <input
                type="text"
                className="form-control border-0 shadow-none ps-1 ps-sm-2"
                placeholder="Search..."
                aria-label="Search..."
              />
            </div>
          </div>
          {/* /Search */}
          <ul className="navbar-nav flex-row align-items-center ms-auto">
            {/* User */}
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="javascript:void(0);"
                data-bs-toggle="dropdown"
                id="profile-dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src={userIcon}
                    alt=""
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                id="profile-dropdown-ul"
              >
                <li>
                  <a className="dropdown-item" href="javascript:void(0);">
                    <div className="d-flex">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar avatar-online">
                          <img
                            src={userIcon}
                            alt=""
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-medium d-block">{user.name}</span>
                        <small className="text-muted">Admin</small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="/my-profile">
                    <i className="bx bx-user me-2" />
                    <span className="align-middle">My Profile</span>
                  </a>
                </li>

                <li>
                  <div className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="javascript:void(0);"
                    onClick={handleLogout}
                  >
                    <i className="bx bx-power-off me-2" />
                    <span className="align-middle">Log Out</span>
                  </a>
                </li>
              </ul>
            </li>
            {/*/ User */}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
