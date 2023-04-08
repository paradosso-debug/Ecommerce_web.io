import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  orderStatusController,
  getAllOrdersController,
} from "../controllers/authController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

//ROUTER OBJECT
const router = express.Router();

//ROUTES

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || METHOD POST
router.post("/login", loginController);

//FORGOT PASSWORD || METHOD POST
router.post("/forgot-password", forgotPasswordController);

//TEST ROUTES
router.get("/test", requireSignIn, isAdmin, testController);

//PROCTECTED ROUTE USER AUTHORIZATION
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

//PROCTECTED ROUTE ADMIN AUTHORIZATION
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//UPATE USER PROFILE
router.put('/profile', requireSignIn, updateProfileController)

//ORDERS ROUTE
router.get('/orders', requireSignIn, getOrdersController)

//ALLO ORDERS ROUTE
router.get('/all-orders', requireSignIn, isAdmin, getAllOrdersController)

//ORDER STATUS
router.put('/order-status/:orderId', requireSignIn, isAdmin, orderStatusController)

export default router;
