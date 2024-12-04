import { Request, Response, NextFunction } from "express";
import Product from "../models/product";

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    formsCSS: true, // to add the form styles with handlebars
    productCSS: true, // to add the product styles with handlebars
  });
};

export const getEditProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("admin/edit-product", {
    pageTitle: "Edit Product",
    path: "admin/edit-product",
    formsCSS: true, // to add the form styles with handlebars
    productCSS: true, // to add the product styles with handlebars
  });
};

export const postAddProduct = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const product = new Product(req.body.title);
  await product.save();
  res.redirect("/");
};

export const getProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  /* render content dynamically using dynamic templating engines
    The first arguments is which template will be rendered,
    the second is the data we are passing to that template, the other
    ones are variables we can pass to the templates, with whichever value we like */
  res.render("shop/products-list", {
    pageTitle: "Shop",
    prods: products,
    path: "shop",
    productCSS: true,
  });
};

export const getAdminProducts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  /* render content dynamically using dynamic templating engines
    The first arguments is which template will be rendered,
    the second is the data we are passing to that template, the other
    ones are variables we can pass to the templates, with whichever value we like */
  res.render("admin/products", {
    pageTitle: "Products",
    prods: products,
    path: "admin/products",
    productCSS: true,
  });
};

export const getCart = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const products = await Product.fetchAll();
  /* render content dynamically using dynamic templating engines
    The first arguments is which template will be rendered,
    the second is the data we are passing to that template, the other
    ones are variables we can pass to the templates, with whichever value we like */
  res.render("shop/cart", {
    pageTitle: "Cart",
    prods: products,
    path: "cart",
    productCSS: true,
  });
};
