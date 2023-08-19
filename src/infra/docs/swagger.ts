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
    '/orders': {
      get: {
        summary: 'Retorna todos os pedidos',
        tags: ['Orders'],
        parameters: [],
        responses: {
          200: {
            description: 'Lista de pedido retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Order',
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
    '/status': {
      get: {
        summary: 'Retorna todos os Status',
        tags: ['Status'],
        parameters: [],
        responses: {
          200: {
            description: 'Lista de status retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/Status',
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
        summary: 'Cria um novo Status',
        tags: ['Status'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Status',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Status criado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Status',
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
            example: 'Cachorro Quente'
          },
          description: {
            type: 'string',
            example: 'Duas salsichas mais tudo que tiver.'
          },
          image: {
            type: 'string',
            example: 'http://meuproduto.com.br/image/cachorroquente.png'
          },
          unitPrice: {
            type: 'number',
            format: 'float',
            example: '10.00'
          },
          category: {
            type: 'string',
            enum: ['Lanche', 'Acompanhamento', 'Bebida', 'Sobremesa'],
          },
        },
        required: ['name', 'description', 'image', 'unitPrice', 'category'],
      },
      Status: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
            example: 'received'
          },
          name: {
            type: 'string',
            example: 'Recebido'
          },
        },
        required: ['key', 'name'],
      },
      Customer: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string',
            example: 'Fernando'
          },
          lastName: {
            type: 'string',
            example: 'Bruno'
          },
          document: {
            type: 'string',
            example: '46699824007'
          },
          email: {
            type: 'string',
            example: 'fernando.bruno@fiap.com.br',
          },
          cellphone: {
            type: 'string',
            example: '11960809533'
          },
        },
        required: ['firstName', 'lastName', 'document', 'email', 'cellphone'],
      },
      Basket: {
        type: "object",
        properties: {
          isTakeOut: {
            type: "boolean",
            example: true
          },
          customerId: {
            type: "string",
            example: "ab123nacn2213b123"
          },
          totalPrice: {
            type: "number",
            example: "10.00"
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
            minLength: 10,
            example: "1321313j123"
          },
          quantity: {
            type: "number",
            minimum: 1,
            maximum: 100,
            example: 1
          },
          unitPrice: {
            type: "number",
            minimum: 1,
            maximum: 1000000,
            example: 100
          },
          observations: {
            type: "string",
            maxLength: 100,
            example: "Sem cebola por favor"
          }
        },
      },
      Payment: {
        type: "object",
        properties: {
          qrCode: {
            type: "string",
            maxLength: 100,
            minLength: 2,
            example: "ml-aasdlkjsflkjsfbasdfbasdf"
          },
          nsu: {
            type: "string",
            maxLength: 100,
            minLength: 2,
            example: "nsu-aj123jk123bj1"
          },
          totalPrice: {
            type: "number",
            minimum: 2,
            maximum: 10,
            example: 1000
          }
        }
      }
    }
  }
};

export default swaggerConfig;
