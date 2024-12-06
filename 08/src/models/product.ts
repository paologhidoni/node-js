import fs from "fs";
import path from "path";

const p = path.join(__dirname, "../../src/data", "products.json");

// Ensure you're using fs.promises to avoid manually wrapping with Promise
export default class Product {
  constructor(
    title: string,
    imageUrl: string,
    description: string,
    price: number
  ) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  title;
  imageUrl;
  description;
  price;

  // Static method to read the products from the JSON file
  static async readProducts(): Promise<Record<string, any>[]> {
    try {
      const data = await fs.promises.readFile(p, "utf-8"); // Use promises API for async read
      return JSON.parse(data);
    } catch (err) {
      return [];
    }
  }

  // Instance method to save a product
  async save() {
    try {
      const products = await Product.readProducts();
      console.log(this, "THIS *********");
      products.push(this);

      // Write the updated products list back to the file
      await fs.promises.writeFile(
        p,
        JSON.stringify(products, null, 2),
        "utf-8"
      );
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.log("Error saving product:", err.message);
      }
    }
  }

  // Static method to fetch all products
  static async fetchAll(): Promise<Record<string, any>[]> {
    return await this.readProducts();
  }
}
