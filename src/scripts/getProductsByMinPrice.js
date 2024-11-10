import * as fs from "node:fs/promises"
import { PATH_DB } from "../constants/path.js"

async function getProductsByMinPrice(num) {
  try {
    const data = await fs.readFile(
      PATH_DB,
      "utf-8"
    )
    const products = JSON.parse(data)

    const filteredProducts = products.filter(
      (item) => item.price >= num
    )
    console.log(filteredProducts)
  } catch (error) {
    console.error("error:", error)
  }
}
getProductsByMinPrice(350)
