import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useCart } from "react-use-cart";
import { auth } from "../services/authService";
import Header from "./Header/HeaderMain";
import Footer from "./Footer";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkData, setCheckData] = useState({});
  const userdata = auth.getUser();
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    addItem,
  } = useCart();

  const checkoutData = () => {
    if (items.length) {
      const newData = items.filter((item) => {
        return item.checked === true;
      });
      setCheckData(newData);
    }
  };

  useEffect(() => {
    checkoutData();
  }, [items]);

  const onSubmit = async (data) => {
    const orderdata = {
      user_id: "userdata.user_id",
      fullname: data.name,
      phone: data.phone,
      address: data.address,
      item: items,
    };
    console.log("orderdata", orderdata);
  };

  const totalItem = () => {
    let itemtotal = 0;
    if (checkData.length) {
      checkData.forEach((item) => (itemtotal += item.itemTotal));
      return itemtotal;
    } else {
      return (itemtotal = 0);
    }
  };
  useEffect(() => {
    totalItem();
  }, [items]);

  const RenderItem = () => {
    if (checkData.length) {
      return checkData.map((item, id) => (
        <div
          className="row justify-content-between bg-white py-4 align-items-center border-bottom"
          key={id}
        >
          <div className="col-5">
            <div className="row justify-content-center">
              <div className="col-2">
                <img className="img-fluid" src={item.avatar} />
              </div>
              <div className="col-6">
                <div className="card-text">{item.name}</div>
              </div>
            </div>
          </div>
          <div className="col text-center text-muted">{new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</div>
          <div className="col">
            <div className="text-center align-items-center">
              <input
                className="align-items-center text-center border-0"
                readOnly
                value={item.quantity}
                style={{ height: "30px", width: "50px" }}
              />
            </div>
          </div>
          <div className="col text-center" style={{ color: "#ee4d2d" }}>
            {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(item.itemTotal)}
          </div>
        </div>
      ));
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="row ps-4 bg-white text-muted py-3 my-4">
            <div className="col-md-6">
              <div className="form-group mb-3">
                <label className="form-label">Họ và tên</label>
                <input
                  {...register("name", { required: true })}
                  readOnly
                  type="text"
                  id="name"
                  name="name"
                  placeholder=""
                  noValidate
                  defaultValue={userdata ? userdata.data.name : null}
                  className="ms-2 border-0"
                />
              </div>
              <div className="form-group mb-3">
                <label className="form-label">Số điện thoại</label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder=""
                  noValidate
                  className="ms-2 border-0 border-bottom"
                />
              </div>
              <div className="form-group">
                <label className="form-label">Địa chỉ</label>
                <input
                  {...register("address", { required: true })}
                  type="address"
                  id="address"
                  name="address"
                  placeholder=""
                  noValidate
                  className="ms-2 border-0 border-bottom"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center bg-white text-muted py-3 mt-4 border">
            <div className="col-5 text-center">
              <div className="" style={{ width: "60%" }}>
                Sản Phẩm
              </div>
            </div>
            <div className="col text-center">Đơn giá</div>
            <div className="col text-center">Số Lượng</div>
            <div className="col text-center">Thành Tiền</div>
          </div>
          {RenderItem()}
          <div className="mt-4 py-4 row d-flex justify-content-between bg-white">
            <div className="col"></div>
            <div className="col"></div>
            <div className="col row">
              <div className="col-4 d-flex align-items-center">
                Tổng đơn giá
              </div>
              <div
                className="col-3 d-flex align-items-center text-center fs-6 me-4"
                style={{ color: "#ee4d2d" }}
              >
                {new Intl.NumberFormat('vn-VN', { style: 'currency', currency: 'VND' }).format(totalItem())}
              </div>
              <div className="col">
                <button
                  type="submit"
                  className="btn text-white fs-6 px-3"
                  style={{ backgroundColor: "#ee2624" }}
                >
                  Đặt hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default Checkout;
