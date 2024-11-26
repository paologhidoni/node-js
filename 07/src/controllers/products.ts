import { Request, Response, NextFunction } from "express";

export const products: Record<string, any>[] = [];

export const getAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true, // to add the active class to the link with handlebars
    formsCSS: true, // to add the form styles with handlebars
    productCSS: true, // to add the product styles with handlebars
  });
};

export const postAddProduct = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(req.body);
  products.push(req.body);
  res.redirect("/");
};

export const getProducts = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  /* render content dynamically using dynamic templating engines
    The first arguments is which template will be rendered,
    the second is the data we are passing to that template, the other
    ones are variables we can pass to the templates, with whichever value we like */
  res.render("shop", {
    pageTitle: "Shop",
    prods: products,
    path: "shop",
    activeShop: true,
    productCSS: true,
    hasProducts: products.length > 0, // with handlebars we cannot run logic in the template, therefore I have to pass a boolean value here
  });
};
