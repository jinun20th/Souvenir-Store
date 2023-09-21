const order = {
    "/api/order/": {
        post: {
            tags: ["Order"],
            description: "Create new order",
            operationId: "create order",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Order",
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
    "/api/order/:id": {
        put: {
            tags: ["Order"],
            description: "Update order",
            operationId: "Update order",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Order",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "order ID",
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
            tags: ["Order"],
            description: "Delete order",
            operationId: "Delete order",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "order ID",
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
            tags: ["Order"],
            description: "Get order by id",
            operationId: "Get order by id",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "order ID",
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

export default order