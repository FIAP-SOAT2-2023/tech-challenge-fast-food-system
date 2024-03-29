import { injectable } from "tsyringe";
import ProductModel from "../models/productModel";
import {IProductRepository} from "../../../core/domain/repositories/productRepository";
import {Product} from "../../../core/domain/entities/product";

@injectable()
export class ProductRepository implements IProductRepository {
  async addProduct(body: Product): Promise<Product> {
    const result = await ProductModel.create({
      name: body.name,
      description: body.description,
      image: body.image,
      unitPrice: body.unitPrice,
      category: body.category,
    });

    return result;
  }

  async getProductById(id: string): Promise<Product> {
    const product = await ProductModel.findOne({
      where: {
        uuid: id,
      },
      attributes: {
        exclude: ["id"],
      },
    });

    if (!product) {
      throw new Error("Produto não encontrado");
    }

    return product!;
  }

  async getAllProduct(filters: Record<string, any>): Promise<Product[]> {
    const { category } = filters;

    const whereOptions: any = {};

    if (category !== undefined) {
      whereOptions.category = category;
    }

    const products = await ProductModel.findAll({
      where: whereOptions,
      attributes: {
        exclude: ["id"],
      },
    });

    return products;
  }

  async putProductById(id: string, body: Product): Promise<Product> {
    const { name, description, image, unitPrice, category } = body;

    const [rowsUpdated] = await ProductModel.update(
      {
        name,
        description,
        image,
        unitPrice,
        category,
      },
      {
        where: { uuid: id },
      }
    );

    if (rowsUpdated !== 1) {
      throw new Error("Produto não encontrado");
    }

    const updatedProduct = await ProductModel.findOne({
      where: { uuid: id },
      attributes: {
        exclude: ["id"],
      },
    });

    if (!updatedProduct) {
      throw new Error("Erro ao recuperar o produto atualizado");
    }

    return updatedProduct;
  }

  async deleteProductById(id: string): Promise<void> {
    const rowsDeleted = await ProductModel.destroy({
      where: { uuid: id },
    });

    if (rowsDeleted === 0) {
      throw new Error("Produto não encontrado");
    }
  }
}
