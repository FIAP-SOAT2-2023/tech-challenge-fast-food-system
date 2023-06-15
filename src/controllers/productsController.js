import ProductRepository from "../models/productsModel.js";

export async function addProduct(req, res) {
    try {
        const result = await ProductRepository.create({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            unitPrice: req.body.unitPrice,
            category: req.body.category,
        });

        res.json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function updateProduct(req, res) {
    try {
        const productId = req.params.id;
        const updatedProduct = await ProductRepository.update(
            {
                name: req.body.name,
                description: req.body.description,
                image: req.body.image,
                unitPrice: req.body.unitPrice,
                category: req.body.category,
            },
            {
                where: { id: productId },
            }
        );

        if (updatedProduct[0] === 0) {
            res.status(404).json({ error: 'Produto não encontrado' });
        } else {
            res.json({ message: 'Produto atualizado com sucesso' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getProduct(req, res) {
    try {
        const productId = req.params.id;
        const product = await ProductRepository.findByPk(productId);

        if (!product) {
            res.status(404).json({ error: 'Produto não encontrado' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        const deletedProduct = await ProductRepository.destroy({
            where: { id: productId },
        });

        if (deletedProduct === 0) {
            res.status(404).json({ error: 'Produto não encontrado' });
        } else {
            res.json({ message: 'Produto deletado com sucesso' });
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}

export async function getAllProducts(req, res) {
    try {
      const { category } = req.query;
      let products;
  
      if (category) {
        products = await ProductRepository.findAll({ where: { category } });
      } else {
        products = await ProductRepository.findAll();
      }
  
      res.json(products);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

export default { addProduct, updateProduct, getProduct, deleteProduct };
