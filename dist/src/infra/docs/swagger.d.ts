declare const swaggerConfig: {
    openapi: string;
    tags: {
        name: string;
    }[];
    paths: {
        '/products': {
            get: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    schema: {
                        type: string;
                        enum: string[];
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
            post: {
                summary: string;
                tags: string[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/products/{id}': {
            put: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
            get: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
            delete: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/customers': {
            post: {
                summary: string;
                tags: string[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/customers/{document}': {
            get: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/customers/{mail}': {
            get: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/checkout': {
            post: {
                summary: string;
                tags: string[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/checkout/pending': {
            get: {
                summary: string;
                tags: string[];
                parameters: any[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/orders/status': {
            get: {
                summary: string;
                tags: string[];
                parameters: any[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    type: string;
                                    items: {
                                        $ref: string;
                                    };
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
            post: {
                summary: string;
                tags: string[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/orders/{id}': {
            patch: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/payment/webhook-notification': {
            post: {
                summary: string;
                tags: string[];
                parameters: any[];
                requestBody: {
                    required: boolean;
                    content: {
                        'application/json': {
                            schema: {
                                $ref: string;
                            };
                        };
                    };
                };
                responses: {
                    200: {
                        description: string;
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
        '/payment/{orderId}': {
            get: {
                summary: string;
                tags: string[];
                parameters: {
                    in: string;
                    name: string;
                    required: boolean;
                    schema: {
                        type: string;
                    };
                    description: string;
                }[];
                responses: {
                    200: {
                        description: string;
                        content: {
                            'application/json': {
                                schema: {
                                    $ref: string;
                                };
                            };
                        };
                    };
                    404: {
                        description: string;
                    };
                    500: {
                        description: string;
                    };
                };
            };
        };
    };
    components: {
        schemas: {
            Order: {
                type: string;
                properties: {
                    status: {
                        type: string;
                        enum: string[];
                    };
                };
                required: string[];
            };
            Product: {
                type: string;
                properties: {
                    name: {
                        type: string;
                        example: string;
                    };
                    description: {
                        type: string;
                        example: string;
                    };
                    image: {
                        type: string;
                        example: string;
                    };
                    unitPrice: {
                        type: string;
                        format: string;
                        example: string;
                    };
                    category: {
                        type: string;
                        enum: string[];
                    };
                };
                required: string[];
            };
            OrderStatus: {
                type: string;
                properties: {
                    key: {
                        type: string;
                    };
                    name: {
                        type: string;
                    };
                };
                example: {
                    key: string;
                    name: string;
                }[];
                required: string[];
            };
            Customer: {
                type: string;
                properties: {
                    firstName: {
                        type: string;
                        example: string;
                    };
                    lastName: {
                        type: string;
                        example: string;
                    };
                    document: {
                        type: string;
                        example: string;
                    };
                    email: {
                        type: string;
                        example: string;
                    };
                    cellphone: {
                        type: string;
                        example: string;
                    };
                };
                required: string[];
            };
            Basket: {
                type: string;
                properties: {
                    isTakeOut: {
                        type: string;
                        example: boolean;
                    };
                    customerId: {
                        type: string;
                        example: string;
                    };
                    totalPrice: {
                        type: string;
                        example: string;
                    };
                    items: {
                        type: string;
                        items: {
                            $ref: string;
                        };
                    };
                    payment: {
                        $ref: string;
                    };
                };
            };
            Item: {
                type: string;
                properties: {
                    productId: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                        example: string;
                    };
                    quantity: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        example: number;
                    };
                    unitPrice: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        example: number;
                    };
                    observations: {
                        type: string;
                        maxLength: number;
                        example: string;
                    };
                };
            };
            Payment: {
                type: string;
                properties: {
                    qrCode: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                        example: string;
                    };
                    nsu: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                        example: string;
                    };
                    totalPrice: {
                        type: string;
                        minimum: number;
                        maximum: number;
                        example: number;
                    };
                };
            };
            PaymentWebHook: {
                type: string;
                properties: {
                    nsu: {
                        type: string;
                        maxLength: number;
                        minLength: number;
                        example: string;
                    };
                    status: {
                        type: string;
                        enum: string[];
                    };
                };
            };
            PaymentInfo: {
                type: string;
                properties: {
                    id: {
                        type: string;
                    };
                    uuid: {
                        type: string;
                        format: string;
                    };
                    status: {
                        type: string;
                    };
                    nsu: {
                        type: string;
                    };
                    qrCode: {
                        type: string;
                    };
                    paidAt: {
                        type: string;
                        format: string;
                    };
                    createdAt: {
                        type: string;
                        format: string;
                    };
                    updatedAt: {
                        type: string;
                        format: string;
                    };
                };
            };
        };
    };
};
export default swaggerConfig;
