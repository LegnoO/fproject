import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import ReactLoading from "react-loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import serviceCallAPI from "../services/ServicesCallAPI";
import { auth } from "../services/authService";

import HeaderMain from "../pages/Header/HeaderMain";
import Footer from "../pages/Footer";
import "../assets/detail.css";

const DetailProduct = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [test, setTest] = useState(0);
  let { id } = useParams();

  const GetProductID = async () => {
    const response = await serviceCallAPI(`products/${id}`, "GET");
    console.log(response.data.data);
    setProduct(response.data.data);
    setLoading(false);
  };
  const userdata = auth.getUser();

  useEffect(() => {
    window.scrollTo(0, 0, "smooth");
    GetProductID();
  }, []);

  const AddItemtoCart = async () => {
    if (!userdata) {
      navigate("/login");
    } else {
      const data = {
        id: product.id,
        name: product.name,
        price: product.price,
        avatar: product.avatar,
        detail: product.detail,
        cate_id: product.cate_id,
        checked: false,
      };
      await addItem(data);

      toast.success("Đã thêm vào giỏ hàng", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <>
      <HeaderMain />
      {loading ? (
        <div className="d-flex justify-content-center loading my-5">
          <ReactLoading type="spin" color="blue" height={"20%"} width={"20%"} />
        </div>
      ) : (
        <section className="detail-section my-5">
          <div className="detail-container">
            <div className="row detail">
              <div className="col-md-5 detail-gallery">
                <img src={product.avatar} />
              </div>
              <div className="col-md-6 detail-gallery">
                <h1>{product.name}</h1>
                <p>{product.detail}</p>
                <h3 className="fs-4" style={{ color: "#ee4d2d" }}>
                  {new Intl.NumberFormat("vn-VN", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price)}
                </h3>

                <div className="cart">
                  <div className="">
                    <button
                      className="sum-cart btn-cart"
                      onClick={() => setTest(test - 1)}
                    >
                      -
                    </button>
                    <input
                      type="numeric"
                      value={product.quantity}
                      defaultValue={1}
                      className="inp-cart"
                      onChange={(e) => setQuantity(e.target.value)}
                    />
                    <button
                      className="sum-cart btn-cart"
                      onClick={() => setTest(test + 1)}
                    >
                      +
                    </button>
                  </div>
                  <div className="mt-3">
                    <button
                      className="btn-addCart"
                      onClick={() =>
                        AddItemtoCart(product.id, product.quantity)
                      }
                    >
                      Thêm vào giỏ hàng
                    </button>
                    <ToastContainer />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      <Footer />
    </>
  );
};

export default DetailProduct;
