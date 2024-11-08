import express from "express";
import path from "path";
const router = express.Router();
import { products } from "./admin";

router.get("/", (req, res, next) => {
  console.log(products, "PRODUCTS");
  res.sendFile(path.join(__dirname, "../../src", "views", "shop.html"));
});

export default router;
