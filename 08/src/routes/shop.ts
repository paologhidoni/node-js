import express from "express";
import { getProducts, getCart } from "../controllers/products";

const shopRoutes = express.Router();

// / => GET
shopRoutes.get("/", getProducts);

// /cart => GET
shopRoutes.get("/cart", getCart);

export default shopRoutes;
