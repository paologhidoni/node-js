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
app.use(adminRoutes);
// Shop routes
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
