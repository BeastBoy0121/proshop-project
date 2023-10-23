import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB(); //connect to MongoDB

dotenv.config(); // Connect to .env file and read it

const port = process.env.PORT || 8000;

const app = express();

//Routes

app.get("/", (req, res) => {
  res.send("APT is running.....");
});

app.use("/api/products", productRoutes);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

//Terminal Message
app.listen(port, () => console.log(`Server running on port ${port}`));
