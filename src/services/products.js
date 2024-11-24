import { Product } from '../db/models/Product.js';

export const getProducts = () => Product.find();

export const getProductById = (productId) => Product.findById(productId);

export const postProduct = (productData) => Product.create(productData);

export const deleteProduct = (productId) =>
  Product.findByIdAndDelete(productId);

export const patchProduct = (productId, productData) =>
  Product.findByIdAndUpdate(productId, productData, { new: true });
