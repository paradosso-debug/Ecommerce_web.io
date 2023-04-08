import express from "express";
import {
  createProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  deleteProductController,
  updateProductController,
  productFiltersController,
  productCountController,
  productListController,
  searchProductController,
  relatedProductController,
  productCategoryController,
  braintreeTokenController,
  brainTreePaymentController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//ROUTES
//CREATE PRODUCT
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//GET ALL PRODUCTS
router.get("/get-product", getProductController);

// GET SINGLE PRODUCT
router.get("/get-product/:slug", getSingleProductController);

//GET PHOTO
router.get("/product-photo/:pid", productPhotoController);

//DELETE PRODUCT
router.delete("/delete-product/:pid", deleteProductController);

//FILTER PRODUCT
router.post("/product-filters", productFiltersController);

//PRODUCT COUNT
router.get("/product-count", productCountController);

// LOADING PRODUCTS
router.get("/product-list/:page", productListController);

//SEARCH FOR PRODUCT
router.get("/search/:keyword", searchProductController);

//RELATED PRODUCTS
router.get("/related-product/:pid/:cid", relatedProductController);

//CATEGORY WISE PRODUCT
router.get('/product-category/:slug', productCategoryController);

//PAYMENT ROUTE
//TOKEN
router.get('/braintree/token', braintreeTokenController);

//PAYMENTS
router.post('/braintree/payment', requireSignIn, brainTreePaymentController); 

export default router;
