const product = {
    "/api/product/": {
        post: {
            tags: ["Product"],
            description: "Create new product",
            operationId: "create product",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Product",
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
        get: {
            tags: ["Product"],
            description: "Get all products",
            operationId: "get all products",
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
    },
    "/api/product/:id": {
        put: {
            tags: ["Product"],
            description: "Update product",
            operationId: "Update product",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Product",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "product ID",
            }],
            responses: {
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
            tags: ["Product"],
            description: "Delete product",
            operationId: "Delete product",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "product ID",
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
            tags: ["Product"],
            description: "Get product by id",
            operationId: "Get product by id",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "product ID",
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

export default product