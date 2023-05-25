import React, { useContext } from "react";
import loginImg from "../../assets/images/login/login.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();
  let from = location?.state?.from?.pathname || "/";

  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-5xl font-bold text-center mt-5">Login</h1>
          <form onSubmit={handleLoginForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                required
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to="/register"
                  className=" font-semibold label-text-alt link link-hover"
                >
                  Haven't an account?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <input type="submit" className="btn btn-warning" value="Login" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
