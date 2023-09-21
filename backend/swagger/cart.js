const cart = {
    "/api/cart/": {
        post: {
            tags: ["Cart"],
            description: "Create new cart",
            operationId: "create cart",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Cart",
                        },
                    },
                },
            },
            responses: {
                200: {
                    description: "Post successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
    },
    "/api/cart/:id": {
        put: {
            tags: ["Cart"],
            description: "Update cart",
            operationId: "Update cart",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Cart",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "cart ID",
            }], responses: {
                200: {
                    description: "Update successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        delete: {
            tags: ["Cart"],
            description: "Delete cart",
            operationId: "Delete cart",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "cart ID",
            }],
            responses: {
                200: {
                    description: "Delete successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        },
        get: {
            tags: ["Cart"],
            description: "Get cart by id",
            operationId: "Get cart by id",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "cart ID",
            }],
            responses: {
                200: {
                    description: "Get successfully",
                },
                404: {
                    description: "Not found",
                },
                500: {
                    description: "Server error",
                },
            },
        }
    }
}

export default cart