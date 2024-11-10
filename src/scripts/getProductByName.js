import * as fs from "node:fs/promises"
import { PATH_DB } from "../constants/path.js"

async function getProductByName(name) {
  try {
    const data = await fs.readFile(
      PATH_DB,
      "utf-8"
    )
    const products = JSON.parse(data)
    const foundProduct = products.find(
      (item) => item.name === name
    )
    if (foundProduct) {
      console.log(foundProduct)
    } else {
      console.log("Product not found")
    }
  } catch (error) {
    console.error("error:", error)
  }
}

getProductByName("Ergonomic Frozen Towels")
