

const Footer = () => {
  return (
    <footer className="mt-5 bg-light">
      <section>
        <div className="container">
          <div className="d-flex justify-content-between pt-5 mb-3">
            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">CHĂM SÓC KHÁCH HÀNG</p>
              <div style={{ color: "#6f787e" }}>
                <p>Trung Tâm Trợ Giúp</p>
                <p>Hướng Dẫn Mua Hàng</p>
                <p>Hướng Dẫn Bán Hàng</p>
                <p>Thanh Toán</p>
                <p>Vận Chuyển</p>
                <p>Chính Sách Bảo Hành</p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Về chúng tôi</p>
              <div style={{ color: "#6f787e" }}>
                <p>Giới thiệu</p>
                <p>Tuyển dụng</p>
                <p>Chính sách bảo mật thanh toán</p>
                <p>Chính sách bảo mật thông tin cá nhân</p>
                <p>Chính sách giải quyết khiếu nại</p>
                <p>Điều khoản sử dụng</p>
                <p>Điều kiện vận chuyển</p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Thanh toán</p>
              <div style={{ color: "#6f787e" }}>
                <p></p>
              </div>
            </div>

            <div className="footer-item" style={{ fontSize: "12px" }}>
              <p className="text-uppercase fw-bold">Theo dõi chúng tôi trên</p>
              <div style={{ color: "#6f787e" }}>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2021 Copyright:{" "}
          <a className="text-reset fw-bold">MDBootstrap.com</a>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
