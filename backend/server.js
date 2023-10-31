import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

connectDB(); //connect to MongoDB

dotenv.config(); // Connect to .env file and read it

const port = process.env.PORT || 8000;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookie Parser middleware
app.use(cookieParser());

//Routes

app.get("/", (req, res) => {
  res.send("APT is running.....");
});

app.use("/api/products", productRoutes);
app.use("/api/users", userRoutes);

//Error Handlers
app.use(notFound);
app.use(errorHandler);

//Terminal Message
app.listen(port, () => console.log(`Server running on port ${port}`));
