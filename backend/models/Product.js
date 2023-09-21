import mongoose from "mongoose";
const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true
        },
        img: {
            type: String,
            require: true,
        },
        categoryId: {
            type: mongoose.ObjectId,
            ref: "Category",
        },
        size: { type: Array },
        color: { type: Array },
        inStock: { type: Boolean, default: true },
        price: {
            type: Number,
            required: true,
        }
    },
    { timestamps: true }
)

export default mongoose.model('Product', ProductSchema);