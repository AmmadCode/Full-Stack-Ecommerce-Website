import express from "express";
import {
  addToCart,
  updataCart,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middlewares/auth.js";

const cartRouter = express.Router();

cartRouter.post("/add", authUser, addToCart);
cartRouter.post("/update", authUser, updataCart);
cartRouter.post("/get", authUser, getUserCart);

export default cartRouter;
