import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
     userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    billingAddress: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'BillingAddress'
    },
    status: {
        type: String,
        required: true,
        enum: ['Pending', 'Printing', 'Shipping', 'Delivered']
    },
    total: {
        type: Number,
        required: true,
    },
    shippingFees: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const Order = mongoose.model("Order", orderSchema);

export default Order;