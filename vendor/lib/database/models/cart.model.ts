import mongoose from "mongoose";


// Importing mongoose to define the schema for the cart model
// Importing mongoose to define the schema for the cart model

// Importing ObjectId from mongoose.Schema to define references in the schema


const { ObjectId } = mongoose.Schema;
const cartSchema = new mongoose.Schema(
  {
    products: [
      {
        product: {
          type: ObjectId,
          ref: "Product",
        },
        name: {
          type: String,
        },
        vendor: {
          type: Object,
        },
        image: {
          type: String,
        },
        size: {
          type: String,
        },
        qty: {
          type: String,
        },
        color: {
          color: String,
          image: String,
        },
        price: Number,
      },
    ],
    cartTotal: Number,
    totalAfterDiscount: Number,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Cart = mongoose.models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;