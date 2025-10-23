import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    type: {
        type: String,
        required: true,
        enum: ['Pre-designed', 'Custom']
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    driveLink: {
        type: String,
        required: true
    },

});

const Product = mongoose.model("Product", productSchema);

export default Product;