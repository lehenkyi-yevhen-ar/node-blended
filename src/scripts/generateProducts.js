import { createFakeProduct } from "../utils/createFakeProduct.js"
import { PATH_DB } from "../constants/path.js"
import * as fs from "node:fs/promises"

async function generateProducts(num) {
  try {
    const data = await fs.readFile(
      PATH_DB,
      "utf-8"
    )
    const products = JSON.parse(data)
    for (let i = 1; i <= num; i++) {
      const product = createFakeProduct()
      products.push(product)
    }
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(products, undefined, 2)
    )
  } catch (error) {
    console.error("error:", error)
  }
}

generateProducts(6)
