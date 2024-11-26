import express from "express";
import { getAddProduct, postAddProduct } from "../controllers/products";

const adminRoutes = express.Router();

// /admin/add-product => GET
adminRoutes.get("/add-product", getAddProduct);

// /admin/add-product => POST
adminRoutes.post("/add-product", postAddProduct);

export { adminRoutes };
