import express from "express";
import {
  getIndex,
  getProducts,
  getCart,
  getCheckout,
} from "../controllers/shop";

const shopRoutes = express.Router();

// / => GET
shopRoutes.get("/", getIndex);

// /products => GET
shopRoutes.get("/products-list", getProducts);

// /cart => GET
shopRoutes.get("/cart", getCart);

// checkout => GET
shopRoutes.get("/checkout", getCheckout);

export default shopRoutes;
