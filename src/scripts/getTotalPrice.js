import { PATH_DB } from "../constants/path.js";
import fs from "node:fs/promises";
async function getTotalPrice() {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);

    const totalPrice = products.reduce((total, product) => {
      total += Number(product.price);
      return total;
    }, 0);
    console.log(totalPrice);
  } catch (error) {
    console.error("error:", error);
  }
}
getTotalPrice();
