import React from "react";

const HeaderNav = () => {
  return (
    <section className="bg-dark mb-4" style={{ background: "#000" }}>
      <nav className="container py-1">
        <div className="d-flex justify-content-evenly">
          <div className="nav-link mx-4 text-white nav-hover">Máy bàn</div>
          <div className="nav-link text-white nav-hover">Laptop</div>
          <div className="nav-link mx-4 text-white nav-hover">Ổ cứng</div>
          <div className="nav-link text-white nav-hover">RAM</div>
          <div className="nav-link mx-4 text-white nav-hover">Phụ kiện</div>
          <div className="nav-link text-white nav-hover">Tin sản phẩm</div>
          <div className="nav-link mx-4 text-white nav-hover">Trả góp</div>
        </div>
      </nav>
    </section>
  );
};

export default HeaderNav;
