import { DataTypes, Model, Sequelize, Validator } from "sequelize";
import db from "../database/connection";

interface ProductAttributes {
  uuid?: string;
  name: string;
  description: string | null;
  image: string | null;
  unitPrice: number;
  category: string;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public id!: number;
  public uuid!: string;
  public name!: string;
  public description!: string;
  public image!: string;
  public unitPrice!: number;
  public category!: string;
}

Product.init(
  {
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    unitPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        isIn: {
          args: [["Lanche", "Acompanhamento", "Bebida", "Sobremesa"]],
          msg: "Categoria inválida",
        },
      },
    },
  },
  {
    sequelize: db,
    modelName: "Product",
  }
);

export default Product;
