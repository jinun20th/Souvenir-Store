import mongoose from "mongoose";
const UserPaymentSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            ref: "User",
            required: true,
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        provider: {
            type: String,
        },
        account: {
            type: String,
        },
    },
    { timestamps: true }
)

export default mongoose.model('UserPayment', UserPaymentSchema);