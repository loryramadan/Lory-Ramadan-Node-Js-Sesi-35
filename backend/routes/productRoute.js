import express from "express"
import { getProducts, getProductById, createProducts, deleteProducts, updateProducts } from "../controllers/Product.js"
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/products',verifyUser, getProducts);
router.get('/products/:id',verifyUser, getProductById);
router.post('/products',verifyUser, createProducts);
router.patch('/products/:id',verifyUser, updateProducts);
router.delete('/products/:id',verifyUser, deleteProducts);

export default router;