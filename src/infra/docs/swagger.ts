const swaggerConfig = {
  openapi: "3.0.0",
  tags: [
    {
      name: "Order",
      description: "API responsável pela a criação do pedido",
    },
  ],
  paths: {
    "/order": {
      post: {
        summary: "Cria um novo pedido",
        tags: ["Order"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Basket",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Checkout criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Basket",
                },
              },
            },
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/order/pending": {
      get: {
        summary: "Retorna todos os pedidos pendentes",
        tags: ["Order"],
        parameters: [],
        responses: {
          200: {
            description: "Lista de produtos retornada com sucesso",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    $ref: "#/components/schemas/Basket",
                  },
                },
              },
            },
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },

    "/orders/{id}": {
      patch: {
        summary: "Atualiza pedido",
        tags: ["Order"],
        parameters: [
          {
            in: "path",
            name: "id",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID do pedido a ser atualizado",
          },
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Order",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Pedido atualizado com sucesso",
          },
          404: {
            description: "Pedido não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
  },
  components: {
    schemas: {
      Order: {
        type: "object",
        properties: {
          status: {
            type: "string",
            enum: ["DONE", "PREPARATION", "READY", "RECEIVED"],
          },
        },
        required: ["status"],
      },

      Basket: {
        type: "object",
        properties: {
          isTakeOut: {
            type: "boolean",
            example: true,
          },
          customerId: {
            type: "string",
            example: "ab123nacn2213b123",
          },
          totalPrice: {
            type: "number",
            example: "10.00",
          },
          items: {
            type: "array",
            items: {
              $ref: "#/components/schemas/Item",
            },
          },
          payment: {
            $ref: "#/components/schemas/Payment",
          },
        },
      },
      Item: {
        type: "object",
        properties: {
          productId: {
            type: "string",
            maxLength: 100,
            minLength: 10,
            example: "1321313j123",
          },
          quantity: {
            type: "number",
            minimum: 1,
            maximum: 100,
            example: 1,
          },
          unitPrice: {
            type: "number",
            minimum: 1,
            maximum: 1000000,
            example: 100,
          },
          observations: {
            type: "string",
            maxLength: 100,
            example: "Sem cebola por favor",
          },
        },
      },
      Payment: {
        type: "object",
        properties: {
          qrCode: {
            type: "string",
            maxLength: 100,
            minLength: 2,
            example: "ml-aasdlkjsflkjsfbasdfbasdf",
          },
          nsu: {
            type: "string",
            maxLength: 100,
            minLength: 2,
            example: "nsu-aj123jk123bj1",
          },
          totalPrice: {
            type: "number",
            minimum: 2,
            maximum: 10,
            example: 1000,
          },
        },
      },
    },
  },
};

export default swaggerConfig;
