import express, { Application } from "express";
import path from "path";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";

const app: Application = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../src/", "public"))); // get access to static content

app.use((req, res, next) => {
  console.log("First middleware, this always runs!");
  next();
});

// Admin routes
app.use("/admin", adminRoutes);
// Shop routes
app.use(shopRoutes);
// Error page
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "../src", "views", "404.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
