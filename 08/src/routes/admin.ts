import express from "express";
import {
  getAddProduct,
  postAddProduct,
  getEditProduct,
  getAdminProducts,
  getOrders,
} from "../controllers/admin";

const adminRoutes = express.Router();

// /admin/products => GET
adminRoutes.get("/products", getAdminProducts);

// /admin/add-product => GET
adminRoutes.get("/add-product", getAddProduct);

// /admin/edit-product => GET
adminRoutes.get("/edit-product", getEditProduct);

// /admin/add-product => POST
adminRoutes.post("/add-product", postAddProduct);

export default adminRoutes;
