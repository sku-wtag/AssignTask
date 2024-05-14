import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { loggedInFailed, loggedInSuccess } from "../store/reducer/authReducer";
import { LOGIN_PATH } from "../config/ApiPath";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post(LOGIN_PATH, {
        username: event.target.username.value,
      });
      if (data.user != null) {
        dispatch(
          loggedInSuccess({
            user: data.user,
            message: "Successfully Logged in.",
          })
        );
        localStorage.setItem("auth", JSON.stringify(data.user));
        navigate("/");
      } else {
        dispatch(
          loggedInFailed({
            user: null,
            message: "Something happened wrong.",
          })
        );
      }
    } catch (e) {
      dispatch(
        loggedInFailed({
          user: null,
          message: e.message,
        })
      );
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username:
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    className="form-control"
                    placeholder="Enter your username"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
