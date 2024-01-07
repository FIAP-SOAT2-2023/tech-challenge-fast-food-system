import { Products } from "core/domain/entities/products";
import { IProductRepository } from "core/domain/repositories/productRepository";

export class ProductRepository implements IProductRepository {
  getProductByCategory(category: string): Promise<Products> {
    return new Promise<Products>(async (resolve, reject) => {
      fetch(`http:localhost:320/product?category=${category}`)
        .then(function (response) {
          resolve(response.json());
        })
        .catch((err) => reject(err));
    });
  }
}
