import { AiFillCheckCircle } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { auth } from "../../services/authService";
import { logout } from "../../features/loginSlice";
import ScrollToTop from "react-scroll-to-top";

import "../../assets/header.css";

const HeaderTop = () => {
  const dispatch = useDispatch();

  const { loading, loggedIn, error } = useSelector((state) => state.signin);

  const userdata = auth.getUser();
  const navigate = useNavigate();

  const LogoutIcon = async () => {
    await dispatch(logout());
    navigate("/login");
  };

  return (
    <>
      <ScrollToTop
        smooth
        style={{ borderRadius: "50%", boxShadow: "0px 0px 20px -6px rgba(0,0,0,0.9)" }}
      />
      
      <div className="" style={{ backgroundColor: "#ee2624" }}>
        <div className="d-flex container">
          <div
            className="d-flex me-auto text-white"
            style={{ fontSize: "13px" }}
          >
            <span className="p-1 ">Kênh người bán</span>
            <span className="p-1 mx-2">Tải ứng dụng</span>
            <span className="p-1">Kết nối</span>
          </div>
          {userdata ? (
            <div className="text-white p-1">
              <AiFillCheckCircle
                className="mb-1 ms-4 fs-6"
                onClick={() => {
                  LogoutIcon();
                }}
              />
              <span className="fs-6 ms-1">{userdata.data.name}</span>
            </div>
          ) : (
            <div
              className="d-flex ms-auto header-login "
              style={{ fontSize: "13px" }}
            >
              <Link
                to="/register"
                className="p-1 text-white text-decoration-none"
              >
                <span>Đăng ký</span>
              </Link>
              <Link to="/login" className="p-1 text-white text-decoration-none">
                <span>Đăng nhập</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
