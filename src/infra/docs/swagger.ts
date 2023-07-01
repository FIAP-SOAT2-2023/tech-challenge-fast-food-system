const swaggerConfig = {
    openapi: '3.0.0',
    tags: [
        {
            name: 'Products',
        },
        {
            name: 'Consumers',
        },
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
        '/consumers': {
            post: {
                summary: 'Cria um novo consumidor',
                tags: ['Consumers'],
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
        '/consumers/{document}': {
            get: {
                summary: 'Retorna um consumidor pelo Documento',
                tags: ['Consumers'],
                parameters: [
                    {
                        in: 'path',
                        name: 'document',
                        required: true,
                        schema: {
                            type: 'string',
                        },
                        description: 'Documento do consumidor a ser recuperado',
                    },
                ],
                responses: {
                    200: {
                        description: 'Consumidor retornado com sucesso',
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: '#/components/schemas/Consumer',
                                },
                            },
                        },
                    },
                    404: {
                        description: 'Consumidor não encontrado',
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
        }
    },
};

export default swaggerConfig;
