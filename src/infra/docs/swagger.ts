const swaggerConfig = {
  openapi: "3.0.0",
  tags: [
    {
      name: "Customers",
      description:
        "Microserviço responsavel por criar,retornar pelo e-mail ou documento os dados",
    },
  ],
  paths: {
    "/customers": {
      post: {
        summary: "Cria um novo cliente",
        tags: ["Customers"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Customer",
              },
            },
          },
        },
        responses: {
          200: {
            description: "Usuário criado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer",
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
    "/customers/{document}": {
      get: {
        summary: "Retorna um cliente pelo Documento",
        tags: ["Customers"],
        parameters: [
          {
            in: "path",
            name: "document",
            required: true,
            schema: {
              type: "string",
            },
            description: "Documento do cliente a ser recuperado",
          },
        ],
        responses: {
          200: {
            description: "cliente retornado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer",
                },
              },
            },
          },
          404: {
            description: "cliente não encontrado",
          },
          500: {
            description: "Erro interno do servidor",
          },
        },
      },
    },
    "/customers/mail/{mail}": {
      get: {
        summary: "Retorna um cliente pelo E-mail",
        tags: ["Customers"],
        parameters: [
          {
            in: "path",
            name: "mail",
            required: true,
            schema: {
              type: "string",
            },
            description: "E-mail do cliente a ser recuperado",
          },
        ],
        responses: {
          200: {
            description: "cliente retornado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/Customer",
                },
              },
            },
          },
          404: {
            description: "cliente não encontrado",
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
      Customer: {
        type: "object",
        properties: {
          firstName: {
            type: "string",
            example: "Fernando",
          },
          lastName: {
            type: "string",
            example: "Bruno",
          },
          document: {
            type: "string",
            example: "46699824007",
          },
          email: {
            type: "string",
            example: "fernando.bruno@fiap.com.br",
          },
          cellphone: {
            type: "string",
            example: "11960809533",
          },
        },
        required: ["firstName", "lastName", "document", "email", "cellphone"],
      },
    },
  },
};

export default swaggerConfig;
