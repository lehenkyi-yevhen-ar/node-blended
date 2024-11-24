import { Product } from '../db/models/Product.js';

export const getProducts = () => Product.find();

export const getProductById = (productId) => Product.findById(productId);
