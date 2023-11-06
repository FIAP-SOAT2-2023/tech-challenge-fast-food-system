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
    },'/customers/{mail}': {
        get: {
          summary: 'Retorna um cliente pelo E-mail',
          tags: ['Customers'],
          parameters: [
            {
              in: 'path',
              name: 'mail',
              required: true,
              schema: {
                type: 'string',
              },
              description: 'E-mail do cliente a ser recuperado',
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
    '/orders/status': {
      get: {
        summary: 'Retorna todos os Status',
        tags: ['Order Status'],
        parameters: [],
        responses: {
          200: {
            description: 'Lista de status retornada com sucesso',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    $ref: '#/components/schemas/OrderStatus',
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
        summary: 'Cria novos Status',
        tags: ['Order Status'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/OrderStatus',
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
                  $ref: '#/components/schemas/OrderStatus',
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
    '/orders/{id}': {
      patch: {
        summary: 'Atualiza pedido',
        tags: ['Order'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'ID do pedido a ser atualizado',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Order',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Pedido atualizado com sucesso',
          },
          404: {
            description: 'Pedido não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/payment/webhook-notification': {
      post: {
        summary: 'Atualiza pagamento',
        tags: ['Payment'],
        parameters: [],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/PaymentWebHook',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Pagamento atualizado com sucesso',
          },
          404: {
            description: 'Pagamento não encontrado',
          },
          500: {
            description: 'Erro interno do servidor',
          },
        },
      },
    },
    '/payment/{orderId}': {
      get: {
        summary: 'coleta o pagamento com o id do pedido',
        tags: ['Payment'],
        parameters: [
          {
            in: 'path',
            name: 'orderId',
            required: true,
            schema: {
              type: 'string',
            },
            description: 'ID do pedido ou NSU do pedido',
          },
        ],        
        responses: {
          200: {
            description: 'Pagamento atualizado com sucesso',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/PaymentInfo',
                },
              },
            },
          },
          404: {
            description: 'Pagamento não encontrado',
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
      Order: {
        type: 'object',
        properties: {
          status: {
            type: 'string',
            enum: ['DONE', 'PREPARATION', 'READY', 'RECEIVED']
          },
        },
        required: ['status'],
      },
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
      OrderStatus: {
        type: 'object',
        properties: {
          key: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        example: [
          {
            key: 'DONE',
            name: 'Finalizado',
          },
          {
            key: 'RECEIVED',
            name: 'Recebido',
          },
          {
            key: 'PREPARATION',
            name: 'Em preparação',
          },
          {
            key: 'READY',
            name: 'Pronto',
          },
        ],
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
      },
      PaymentWebHook: {
        type: "object",
        properties: {
          nsu: {
            type: "string",
            maxLength: 100,
            minLength: 2,
            example: "nsu-eu198-1928"
          },
          status: {
            type: "string",
            enum: ['APPROVED', 'REPROVED'],
          }
        }
      },
      PaymentInfo: {
        type: "object",
        properties: {
          id: {
            type: "integer"
          },
          uuid: {
            type: "string",
            format: "uuid"
          },
          status: {
            type: "string"
          },
          nsu: {
            type: "string"
          },
          qrCode: {
            type: "string"
          },
          paidAt: {
            type: "string",
            format: "date-time"
          },
          createdAt: {
            type: "string",
            format: "date-time"
          },
          updatedAt: {
            type: "string",
            format: "date-time"
          }
        }
      }    
    }
  }
};

export default swaggerConfig;
