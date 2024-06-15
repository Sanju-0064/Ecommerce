import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const NotFound = () => {
  const navigate = useNavigate();
  const islogin = useSelector((state) => state.userInfo.islogin);

  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          {" "}
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <a href={islogin?'/dashboard':"/"} className="btn btn-primary" >
          Go Back
        </a>
      </div>
    </div>
  );
};

export default NotFound;
