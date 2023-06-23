import { DataTypes, Model, Sequelize } from "sequelize";
import db from "../database/connection";

interface ProductAttributes {
  uuid: string;
  name: string;
  description: string | null;
  image: string | null;
  unitPrice: number;
  category: "Lanche" | "Acompanhamento" | "Bebida" | "Sobremesa" | null;
}

class Product extends Model<ProductAttributes> implements ProductAttributes {
  public uuid!: string;
  public name!: string;
  public description!: string | null;
  public image!: string | null;
  public unitPrice!: number;
  public category!: "Lanche" | "Acompanhamento" | "Bebida" | "Sobremesa" | null;
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
      type: DataTypes.ENUM("Lanche", "Acompanhamento", "Bebida", "Sobremesa"),
      allowNull: true,
    },
  },
  {
    sequelize: db,
    modelName: "Product",
  }
);

export default Product;
