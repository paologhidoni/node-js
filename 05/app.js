const express = require("express");

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log("First middleware, this always runs!");
  next();
});

app.post("/add-product", (req, res, next) => {
  res.send(
    "<h1>Add product</h1><form action='/product' method='POST'><input type='text' name='title'><button type='submit'>Add</button></form>"
  );
});

app.use("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

app.use((req, res, next) => {
  res.send(
    "<h1>First page!</h1><h2>Click to add a product</h2><a href='/add-product'><button>Add a product</button></a>"
  );
});

app.listen(3000);
