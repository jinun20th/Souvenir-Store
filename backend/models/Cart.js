import mongoose from "mongoose";
const CartSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            ref: 'User',
            required: true,
        },
        productId: {
            type: mongoose.ObjectId,
            ref: 'User',
            required: true,
        },
        quantity: {
            type: Number,
            default: 1,
        },
    },
    { timestamps: true }
)

export default mongoose.model('Cart', CartSchema);