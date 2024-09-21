import express from "express";
import dotenv from "dotenv";
import cors from "./middleware/cors.js";
import cookieParser from "cookie-parser";
import { errorLog, errorHandler } from "./middleware/errorHandler.js";
import authRoutes from "./modules/auth/infraestructure/input_adapters/authRoutes.js";
import userRoutes from "./modules/user/infraestructure/input_adapters/userRoutes.js";
import imagesRoutes from "./modules/images/infraestructure/input_adapters/imageRoutes.js";
import productRoutes from "./modules/product/infraestructure/input_adapters/productRoutes.js";
import categoryRoutes from "./modules/category/infraestructure/input_adapters/categoryRoutes.js";
import subCategoryRoutes from "./modules/subcategory/infraestructure/input_adapters/subcategoryRoutes.js";
import skillRoutes from "./modules/skill/infraestructure/input_adapter/skillRoutes.js";

//Inicialization
dotenv.config();
const app = express();

/**Middleware */
app.use(cors);
app.use(express.json());
app.use(cookieParser());

//Index routes
app.use(authRoutes);
app.use(userRoutes);
app.use(imagesRoutes);
app.use(productRoutes);
app.use(categoryRoutes);
app.use(subCategoryRoutes);
app.use(skillRoutes);

//ErrorHandler
app.use(errorLog);
app.use(errorHandler);

export default app;
