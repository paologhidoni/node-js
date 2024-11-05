import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send(
    "<h1>First page yeah!</h1><h2>Click to add a product</h2><a href='/add-product'><button>Add a product</button></a>"
  );
});

export default router;
