import express, { Application } from "express";
import adminRoutes from "./routes/admin";
import shopRoutes from "./routes/shop";

const app: Application = express();

app.use(express.urlencoded({ extended: false }));

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
  res.status(404).send("<h1>Page not found</h1>");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
