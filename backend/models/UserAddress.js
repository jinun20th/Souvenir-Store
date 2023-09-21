import mongoose from "mongoose";
const UserAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.ObjectId,
        ref: "User",
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    }
}, { timestamps: true }
);
export default mongoose.model('UserAddress', UserAddressSchema)