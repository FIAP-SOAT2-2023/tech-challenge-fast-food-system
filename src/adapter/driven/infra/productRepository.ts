import { injectable } from "tsyringe";
import ProductModel from "../../../infra/models/productModel";
import { IProductRepository } from "../../../core/applications/ports/out/productRepository";
import { Product } from "../../../core/domain/product";

@injectable()
export class ProductRepository implements IProductRepository {
  async addProduct(body: Product): Promise<ProductModel> {
    const result = await ProductModel.create({
      name: body.name,
      description: body.description,
      image: body.image,
      unitPrice: body.unitPrice,
      category: body.category,
    });

    return result;
  }

  async getProductById(id: string): Promise<ProductModel> {
    const product = await ProductModel.findOne({
      where: {
        uuid: id,
      },
      attributes: {
        exclude: ["id"],
      },
    });

    // TODO Ajustar retorno para produto não encontrado no banco de dados - status code 404
    if (!product) {
      throw new Error("Produto não encontrado");
    }

    return product!;
  }

  async getAllProduct(filters: Record<string, any>): Promise<ProductModel[]> {
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

  async putProductById(id: string, body: Product): Promise<ProductModel> {
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
  }
}
