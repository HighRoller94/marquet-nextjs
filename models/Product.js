import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 60,
    },
    desc: {
        type: String,
        required: true,
        maxlength: 200,
    },
    gallery: [String],
    price: {
        type: Number,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    sizes: [String],
},
{ timestamps: true}
);

export default mongoose.models.Product || mongoose.model("Product", ProductSchema);