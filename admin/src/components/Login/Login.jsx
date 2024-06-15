import "../../assets/vendor/css/pages/page-auth.css";
import { useState } from "react";
import { login } from "../../services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { setIslogin, setUser } from "../../redux/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputType, setInputType] = useState("password");
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });
  const [err, setErr] = useState({});
  const handlePasswordToggle = () => {
    setInputType((prevType) => (prevType === "text" ? "password" : "text"));
  };
  const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleLogin = async () => {
    removeErrors();

    let errObj = new Object();

    if (loginObj.email === "") {
      errObj.email = "Please enter email.";
    } else if (!isValidEmail(loginObj.email)) {
      errObj.email = "Please enter valid email.";
    }
    if (loginObj.password === "") {
      errObj.password = "Please enter password.";
    }

    if (Object.keys(errObj).length > 0) {
      setErr(errObj);
      setErrors();
    } else {
      setErr({});
      let result = await login(loginObj);
      if (result.success) {
        toast.success(result.message, {
          position: "top-right",
          autoClose: 2000,
        });
        sessionStorage.setItem('user', JSON.stringify(result.response));

        dispatch(setIslogin(true));
        dispatch(setUser({ ...result.response }));
        setLoginObj({
          email: "",
          password: "",
        });
        navigate("/dashboard");
      } else {
        toast.error(result.message, {
          position: "top-right",
          autoClose: 2000,
        });
      }
    }
  };

  return (
    <>
      <div className="container-xxl">
        <div className="authentication-wrapper authentication-basic container-p-y">
          <div className="authentication-inner">
            {/* Register */}
            <div className="card">
              <div className="card-body">
                <h4 className="mb-2">Welcome to Fruitables! 👋</h4>
                <p className="mb-4">
                  Please sign-in to your account and start the adventure
                </p>
                <form
                  id="formAuthentication"
                  className="mb-3"
                  action="javascript:void(0);"
                  onSubmit={handleLogin}
                >
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Enter your email..."
                      autoFocus=""
                      value={loginObj.email}
                      onChange={(e) => {
                        setLoginObj((prevState) => ({
                          ...prevState,
                          email: e.target.value,
                        }));
                      }}
                    />
                    <div className="invalid-feedback">{err.email || ""}</div>
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                      <a href="auth-forgot-password-basic.html">
                  <small>Forgot Password?</small>
                </a>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        type={inputType}
                        id="password"
                        className="form-control"
                        name="password"
                        placeholder="············"
                        aria-describedby="password"
                        value={loginObj.password}
                        onChange={(e) => {
                          setLoginObj((prevState) => ({
                            ...prevState,
                            password: e.target.value,
                          }));
                        }}
                      />
                      <span
                        className="input-group-text cursor-pointer"
                        onClick={handlePasswordToggle}
                      >
                        <i
                          className={`bx ${
                            inputType === "text" ? "bx-show" : "bx-hide"
                          }`}
                        />
                      </span>
                      <div className="invalid-feedback">{err.password || ""}</div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label" htmlFor="remember-me">
                        {" "}
                        Remember Me{" "}
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <button
                      className="btn btn-primary d-grid w-100"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
                {/* <p className="text-center">
            <span>New on our platform?</span>
            <a href="auth-register-basic.html">
              <span>Create an account</span>
            </a>
          </p> */}
              </div>
            </div>
            {/* /Register */}
          </div>
        </div>
      </div>
    </>
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

export default Login;
