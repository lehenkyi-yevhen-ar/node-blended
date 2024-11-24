import createHttpError from 'http-errors';
import {
  deleteProduct,
  getProductById,
  getProducts,
  patchProduct,
  postProduct,
} from '../services/products.js';

export const getProductController = async (_req, res) => {
  const products = await getProducts();

  res.json({
    status: 200,
    message: 'Successfully found products!',
    data: products,
  });
};

export const getProductByIdController = async (req, res) => {
  const { productId } = req.params;

  const product = await getProductById(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully found product with id ${productId}!`,
    data: product,
  });
};

export const createProductController = async (req, res) => {
  const product = await postProduct(req.body);

  res.status(201).json({
    status: 201,
    message: `Successfully created a Product!`,
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;
  const product = await deleteProduct(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.sendStatus(204);
};

export const patchProducttController = async (req, res) => {
  const { productId } = req.params;

  const product = await patchProduct(productId, req.body);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.json({
    status: 200,
    message: `Successfully patched a Product!`,
    data: product,
  });
};
