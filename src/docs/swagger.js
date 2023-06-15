const swaggerConfig = {
    openapi: '3.0.0',
    tags: [
        {
            name: 'Products',
        },
        {
            name: 'Users',
        },
    ],
    paths: {
        '/products': {
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
        },
        '/users': {
            post: {
                summary: 'Cria um novo usuário',
                tags: ['Users'],
                requestBody: {
                    required: true,
                    content: {
                        'application/json': {
                            schema: {
                                $ref: '#/components/schemas/User',
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
                                    $ref: '#/components/schemas/User',
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
                    id: {
                        type: 'string',
                        format: 'uuid',
                    },
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
                required: ['name', 'unitPrice'],
            },
            User: {
                type: 'object',
                properties: {
                    name: {
                        type: 'string',
                    },
                    cpf: {
                        type: 'string',
                    },
                    email: {
                        type: 'string',
                    },
                },
                required: ['name', 'cpf', 'email'],
            },
        }
    },
};

export default swaggerConfig;
