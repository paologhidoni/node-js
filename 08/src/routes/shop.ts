import express from "express";
import { getProducts } from "../controllers/products";

const shopRoutes = express.Router();

// / => GET
shopRoutes.get("/", getProducts);

export default shopRoutes;
