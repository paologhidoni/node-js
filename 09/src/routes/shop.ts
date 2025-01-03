import express from "express";
import {
  getIndex,
  getProducts,
  getProduct,
  getCart,
  getCheckout,
  getOrders,
} from "../controllers/shop";

const shopRoutes = express.Router();

// / => GET
shopRoutes.get("/", getIndex);

// /products => GET
shopRoutes.get("/products", getProducts);

// /products/:productId => GET
shopRoutes.get("/products/:productId", getProduct);

// /cart => GET
shopRoutes.get("/cart", getCart);

// checkout => GET
shopRoutes.get("/checkout", getCheckout);

// orders => GET
shopRoutes.get("/orders", getOrders);

export default shopRoutes;
