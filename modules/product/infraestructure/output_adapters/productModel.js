import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    //campos principales del producto
    title: String,
    urlCover: String,
    aboutGig: String,
    phone: String,
    price: { type: Number, default: 0 },
    location: {
      province: String,
      city: String,
    },
    tags: [String],
    faq: [{ question: String, answer: String, _id: false }],
    createdAt: { type: Date, default: new Date() },
    //campos de control
    counter: { type: Number, default: 0 },
    active: { type: Boolean, default: false },
    //campos de referencia
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    subcategory: { type: Schema.Types.ObjectId, ref: "  " },
  },
  {
    timestamps: false,
    versionKey: false,
  }
);
const productModel = model("Product", productSchema);

export { productModel };
