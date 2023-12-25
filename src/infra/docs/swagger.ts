const swaggerConfig = {
  openapi: "3.0.0",
  tags: [
    {
      name: "Pedido",
      description:
        "É um microserviço responsável pela criação dos pedido do Fast Food System",
    },
  ],
  paths: {
    "/checkout": {
      post: {
        summary: "Cria um novo pedido",
        tags: ["Pedido"],
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
    "/checkout/pending": {
      get: {
        summary: "Retorna todos os pedidos pendentes",
        tags: ["Pedido"],
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
        tags: ["Pedido"],
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

    "/payment/{orderId}": {
      get: {
        summary: "coleta o pagamento com o id do pedido",
        tags: ["Pedido"],
        parameters: [
          {
            in: "path",
            name: "orderId",
            required: true,
            schema: {
              type: "string",
            },
            description: "ID do pedido ou NSU do pedido",
          },
        ],
        responses: {
          200: {
            description: "Pagamento atualizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/PaymentInfo",
                },
              },
            },
          },
          404: {
            description: "Pagamento não encontrado",
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

      PaymentInfo: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          uuid: {
            type: "string",
            format: "uuid",
          },
          status: {
            type: "string",
          },
          nsu: {
            type: "string",
          },
          qrCode: {
            type: "string",
          },
          paidAt: {
            type: "string",
            format: "date-time",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
        },
      },
    },
  },
};

export default swaggerConfig;
