import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useCart } from "react-use-cart";
import ReactLoading from "react-loading";

import { login } from "../features/loginSlice";
import { auth } from "../services/authService";

import HeaderMain from "../pages/Header/HeaderMain";
import Footer from "../pages/Footer";
import "../assets/login.css";

const FormLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading, loggedIn, error } = useSelector((state) => state.signin);
  const userdata = auth.getUser();

  useEffect(() => {
    if (userdata) {
      navigate("/product");
      console.log(userdata)
    }
  }, [loading]);

  const onSubmit = async (data) => {
    const formdata = {
      email: data.email,
      password: data.password,
      rememberMe: true,
    };

    try {
      await dispatch(login(formdata));
    } catch (e) {
      console.log("%cCan not login!", "color:red", "Error:", e.message);
    }
  };

  return (
    <>
      <HeaderMain />
      <div className="container rounded-1 mt-5">
        {loading ? (
          <div className="d-flex justify-content-center loading">
            <ReactLoading
              type="spin"
              color="blue"
              height={"20%"}
              width={"20%"}
            />
          </div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form-group login-container container p-5"
          >
            <div className="mb-4">
              <h1 className="text-black fs-2">Đăng Nhập</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                {...register("email", { required: true })}
                type="email"
                id="email"
                name="email"
                placeholder=""
                noValidate
                className="form-control border-dark"
              />
              {errors.email && (
                <span className="text-error text-danger">
                  Please type email
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type="password"
                id="password"
                name="password"
                placeholder=""
                noValidate
                className="form-input form-control border-dark"
              />
              {errors.password && (
                <span className="text-error text-danger">
                  Please type password
                </span>
              )}
            </div>

            <div className="mb-3">
              <button
                type="submit"
                className="submit-button border-dark p-2 px-3 mw-100"
                style={{
                  borderRadius: "15px",
                }}
              >
                Log in
              </button>
            </div>

            <div className="form-footer fs-5 text-black">
              Don't have an account?{" "}
              <Link className="link-text text-black" to="/register">
                Sign up
              </Link>
            </div>
          </form>
        )}
      </div>
      <Footer />
    </>
  );
};

export default FormLogin;
