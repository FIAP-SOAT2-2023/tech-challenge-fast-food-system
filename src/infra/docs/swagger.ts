const swaggerConfig = {
  openapi: '3.0.0',
  tags: [
    {
      name: 'Products',
    },
    {
      name: 'Customers',
    },
    {
      name: 'Checkout'
    }
  ],
  paths: {
    '/products': {
      get: {
        summary: 'Retorna todos os produtos',
        tags: ['Products'],
        parameters: [
          {
            in: 'query',
            name: 'category',
            schema: {
              type: 'string',
              enum: ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa'],
            },
            description: 'Filtrar por categoria',
          },
        ],
        responses: {
          200: {
            description: 'Lista de produtos retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Product',
                  },
                },
              },
            },
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
      post: {
        summary: 'Cria um novo produto',
        tags: ['Products'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Produto criado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/products/{id}': {
      put: {
        summary: 'Atualiza um produto existente',
        tags: ['Products'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'ID do produto a ser atualizado',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Product',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Produto atualizado com sucesso',
          },
          404: {
            description: 'Produto não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
      get: {
        summary: 'Retorna um produto pelo ID',
        tags: ['Products'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'ID do produto a ser recuperado',
          },
        ],
        responses: {
          200: {
            description: 'Produto retornado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Product',
                },
              },
            },
          },
          404: {
            description: 'Produto não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
      delete: {
        summary: 'Deleta um produto pelo ID',
        tags: ['Products'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'ID do produto a ser deletado',
          },
        ],
        responses: {
          200: {
            description: 'Produto deletado com sucesso',
          },
          404: {
            description: 'Produto não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/customers': {
      post: {
        summary: 'Cria um novo cliente',
        tags: ['Customers'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Customer',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Usuário criado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Customer',
                },
              },
            },
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/customers/{document}': {
      get: {
        summary: 'Retorna um cliente pelo Documento',
        tags: ['Customers'],
        parameters: [
          {
            in: 'path',
            name: 'document',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'Documento do cliente a ser recuperado',
          },
        ],
        responses: {
          200: {
            description: 'cliente retornado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Customer',
                },
              },
            },
          },
          404: {
            description: 'cliente não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/checkout': {
      post: {
        summary: 'Cria um novo pedido',
        tags: ['Checkout'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Basket',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Checkout criado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Basket',
                },
              },
            },
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/checkout/pending': {
      get: {
        summary: 'Retorna todos os pedidos pendentes',
        tags: ['Checkout'],
        parameters: [],
        responses: {
          200: {
            description: 'Lista de produtos retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Basket',
                  },
                },
              },
            },
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Product: {
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
          description: {
            type: 'string',
          },
          image: {
            type: 'string',
          },
          unitPrice: {
            type: 'number',
            format: 'float',
          },
          category: {
            type: 'string',
            enum: ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa'],
          },
        },
        required: ['name', 'description', 'image', 'unitPrice', 'category'],
      },
      Customer: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
          },
          lastName: {
            type: 'string',
          },
          document: {
            type: 'string',
          },
          email: {
            type: 'string',
          },
          cellphone: {
            type: 'string',
          },
        },
        required: ['firstName', 'lastName', 'document', 'email', 'cellphone'],
      },
      Basket: {
        type: "object",
        properties: {
          isTakeOut: {
            type: "boolean"
          },
          customerId: {
            type: "number"
          },
          totalPrice: {
            type: "number"
          },
          items: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Item"
            }
          },
          payment: {
            $ref: "#/components/schemas/Payment"
          }
        }
      },
      Item: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            maxLength: 100,
            minLength: 10
          },
          quantity: {
            type: "number",
            minimum: 1,
            maximum: 100
          },
          unitPrice: {
            type: "number",
            minimum: 1,
            maximum: 1000000
          },
          observations: {
            type: "string",
            maxLength: 100
          }
        },
      },
      Payment: {
        type: "object",
        properties: {
          qrCode: {
            type: "string",
            maxLength: 100,
            minLength: 2
          },
          nsu: {
            type: "string",
            maxLength: 100,
            minLength: 2
          },
          status: {
            type: "string"
          },
          paidAt: {
            type: "string",
            format: "date-time"
          },
          totalPrice: {
            type: "number",
            minimum: 2,
            maximum: 10
          }
        }
      }
    }
  }
};

export default swaggerConfig;
