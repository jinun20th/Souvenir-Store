import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
    {
        name: {
          type: String,
          required: true,
        },
        username: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        img: {
          type: String
        },
        email: {
          type: String,
          unique: true,
        },
        phone: {
          type: String,
          unique: true,
          required: true,
        },
        birthday: {
          type: String,
        },
        gender: {
          type: String,
        },
        isAdmin: {
          type: Boolean,
          default: false,
        },
      },
      { timestamps: true }
)

export default mongoose.model('User', UserSchema);