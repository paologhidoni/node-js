import { Request, Response } from "express";

export const getNotFound = (req: Request, res: Response) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "" });
};
