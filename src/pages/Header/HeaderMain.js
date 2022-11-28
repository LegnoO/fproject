import {
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineUser,
  AiFillCheckCircle,
} from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useState } from "react";

import { auth } from "../../services/authService";

import HeaderTop from "../Header/HeaderTop";

const Header = () => {
  const { totalUniqueItems, items } = useCart();

  const userdata = auth.getUser();
  const navigate = useNavigate();

  const search = (value) => {
    const searchData = items.filter((item) => {
      return item.name.toLowerCase().includes(value);
    });
    console.log(searchData);
  };

  return (
    <>
      <HeaderTop />
      <header
        className="d-flex"
        style={{ backgroundColor: "#ee2624", color: "#fff" }}
      >
        <div className="w-100">
          <div className="container py-4">
            <div className="row text-center justify-content-center">
              <div className="col col-lg-2 col-sm-2">
                <Link to="/product" className="text-white text-decoration-none">
                  <div className="nav-brand">
                    <i className=" fs-4 fw-bold">Shop</i>
                  </div>
                </Link>
              </div>
              <div className="col col-lg col-sm">
                <form>
                  <div className="">
                    <input
                      onChange={(e) => search(e.target.value)}
                      className="p-2 ps-4 bg-light position-relative"
                      style={{
                        width: "90%",
                        border: "none",
                        backgroundColor: "#fff",
                        borderRadius: "20px",
                      }}
                      placeholder="Tìm kiếm..."
                    />
                    <span
                      className="text-black position-absolute d-none"
                      style={{
                        right: "360px",
                        top: "59px",
                      }}
                    >
                      <AiOutlineSearch />
                    </span>
                  </div>
                </form>
              </div>
              <div className="col col-lg-2 col-sm-2">
                <div className="fs-4">
                  <Link to="/cart" className="position-relative">
                    <AiOutlineShoppingCart className="text-white fs-3" />
                    {userdata ? (
                      <span
                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-black fw-normal"
                        style={{ fontSize: "11px" }}
                      >
                        {totalUniqueItems}
                      </span>
                    ) : (
                      <></>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
