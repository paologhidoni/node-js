import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const getIndex = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  /* render content dynamically using dynamic templating engines
    The first arguments is which template will be rendered,
    the second is the data we are passing to that template, the other
    ones are variables we can pass to the templates, with whichever value we like */
  res.render("shop/index", {
    pageTitle: "Products - Shop",
    prods: products,
    path: "/index",
  });
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();

  res.render("shop/products-list", {
    pageTitle: "Shop",
    prods: products,
    path: "/products-list",
  });
};

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("shop/cart", {
    pageTitle: "Cart",
    path: "/cart",
  });
};

export const getCheckout = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("shop/checkout", {
    pageTitle: "Checkout",
    path: "/checkout",
  });
};

export const getOrders = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const orders: [] = [];

  res.render("shop/orders", {
    pageTitle: "Your Orders",
    orders: orders,
    path: "/orders",
  });
};
