import fs from "node:fs/promises";
import { PATH_DB } from "../constants/path.js";

async function changeProduct() {
  const data = await fs.readFile(PATH_DB, "utf-8");
  const products = JSON.parse(data);
  const changedProducts = products.map((product) => {
    const { description, ...restProduct } = product;
    return restProduct;
  });
  await fs.writeFile(PATH_DB, JSON.stringify(changedProducts, undefined, 2));
}

changeProduct();
