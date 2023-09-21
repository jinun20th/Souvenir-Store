const user = {
    "/api/user/": {
        get: {
            tags: ["User"],
            description: "Get all users",
            operationId: "get all users",
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
    "/api/user/{id}": {
        put: {
            tags: ["User"],
            description: "Update user",
            operationId: "Update user",
            requestBody: {
                content: {
                    // content-type
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/User",
                        },
                    },
                },
            },
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "User ID",
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
            tags: ["User"],
            description: "Delete user",
            operationId: "Delete user",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "User ID",
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
            tags: ["User"],
            description: "Get user by id",
            operationId: "Get user by id",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "User ID",
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
    },
    "/api/user/reset/{id}": {
        post: {
            tags: ["User"],
            description: "Reset password for user",
            operationId: "Reset password for user",
            parameters: [{
                name: "id",
                in: "path",
                required: true,
                description: "User ID",
            }],
            responses: {
                200: {
                    description: "Reset successfully",
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

export default user