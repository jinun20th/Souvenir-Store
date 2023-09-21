import swaggerJSDoc from 'swagger-jsdoc';
import auth from './swagger/auth.js';
import user from './swagger/user.js';
import product from './swagger/product.js';
import order from './swagger/order.js';
import cart from './swagger/cart.js';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: "Nodejs api project for mongoDB",
        version: '1.0.0'
    },
    servers: [
        {
            url: "http://localhost:5000/"
        }
    ], paths: {
        ...auth,
        ...user,
        ...product,
        ...order,
        ...cart,
    }, components: {
        schemas: {
            User: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "",
                        example: "Nguyen Van A",
                    },
                    username: {
                        type: "string",
                        description: "",
                        example: "Username123",
                    },
                    password: {
                        type: "string",
                        description: "",
                        example: "",
                    },
                    img: {
                        type: "string",
                        description: "",
                        example: "https://chuvoiconabondon",
                    },
                    email: {
                        type: "string",
                        description: "",
                        example: "nguyenvana@gmail.com",
                    },
                    phone: {
                        type: "string",
                        description: "",
                        example: "0123456789",
                    },
                    birthday: {
                        type: "date",
                        example: "20/02/2002",
                    },
                    gender: {
                        type: "string",
                        description: "",
                        example: "Nam",
                    },
                    isAdmin: {
                        type: "boolean",
                        description: "",
                        example: false,
                    },
                }
            },
            Product: {
                type: "object",
                properties: {
                    title: {
                        type: "string",
                        description: "",
                        example: "Nen thom abc",
                    },
                    desc: {
                        type: "string",
                        description: "",
                        example: "Nen thom thom vai",
                    },
                    img: {
                        type: "string",
                        example: "chuvoiconobandon.com",
                    },
                    categoryId: {
                        type: "integer",
                        example: 1
                    },
                    size: {
                        type: "array",
                        example: "['S', 'M', 'L']",
                    },
                    color: {
                        type: "array",
                        example: "['red', 'green', 'blue']",
                    },
                    inStock: {
                        type: "boolean",
                        example: "True",
                    },
                    price: {
                        type: "integer",
                        example: 99500
                    }
                }
            },
            Order: {
                type: "object",
                properties: {
                    userId: {
                        type: "integer",
                        example: 1
                    },
                    products: {
                        type: "array",
                        example: [
                            {
                                productId: 1,
                                quantity: 2
                            },
                            {
                                productId: 3,
                                quantity: 2
                            }
                        ]
                    },
                    amount: {
                        type: "integer",
                        example: 100000
                    },
                    address: {
                        type: "object",
                        example: ""
                    },
                    status: {
                        type: "string",
                        example: "pending"
                    }
                }
            },
            Cart: {
                type: "object",
                properties: {
                    userId: {
                        type: "interge",
                        example: 1,
                    },
                    productId: {
                        type: "interge",
                        example: 1,
                    },
                    quantity: {
                        type: "interge",
                        example: 1                        
                    }
                }
            },
        }
    }
}

const options = {
    swaggerDefinition,
    apis: ["./index.js"]
}

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;