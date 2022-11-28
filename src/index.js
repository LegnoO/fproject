import React from "react";
import ReactDOM from "react-dom/client";
import { CartProvider } from "react-use-cart";
import "./assets/app.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./router/Routing";
import { BrowserRouter } from "react-router-dom";
import store from "./app/store";
import { Provider } from "react-redux";
// import { getProductList } from "../features/productSlice";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const dispatch = useDispatch();
  
// const { data, loading } = useSelector((state) => state.product);
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <CartProvider>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </CartProvider>
    </React.StrictMode>
  </Provider>
);
