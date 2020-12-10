import express from 'express'
import { getProductById, getProducts } from '../controllers/productControler.js'
const router = express.Router()

router.route('/').get(getProducts)

// get single product
router.route('/:id').get(getProductById)

export default router
