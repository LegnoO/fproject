import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import ReactLoading from "react-loading";

import serviceCallAPI from "../services/ServicesCallAPI";

import HeaderMain from "../pages/Header/HeaderMain";
import Footer from "../pages/Footer";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      await serviceCallAPI("register", "post", data);
    } catch (e) {
      console.log("%cCan not register!", "color:red", "Error:", e.message);
    }

    setTimeout(() => {
      setLoading(true);
      navigate("/");
    }, 10000);
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
            <h1 className="text-black fs-2">Đăng ký</h1>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
            Name
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              name="name"
              placeholder=""
              noValidate
              className="form-control border-dark"
            />
            {errors.email && (
              <span className="text-error text-danger">
                Please type name
              </span>
            )}
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
            <label htmlFor="exampleInputEmail1" className="form-label">
              Current Password
            </label>
            <input
              {...register("c_password", { required: true })}
              type="password"
              id="c_password"
              name="c_password"
              placeholder=""
              noValidate
              className="form-control border-dark"
            />
            {errors.c_password && (
              <span className="text-error text-danger">
                Please type current password
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
              Sign up
            </button>
          </div>

          <div className="form-footer fs-5 text-black">
            Already have an account?{" "}
            <Link className="link-text text-black" to="/login">
              Sign in
            </Link>
          </div>
        </form>
      )}
    </div>
    <Footer />
  </>
  );
};

export default Register;
