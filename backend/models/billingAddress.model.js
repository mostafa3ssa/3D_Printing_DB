import mongoose from "mongoose";

const billingAddressSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true
    }
});

const BillingAddress = mongoose.model("BillingAddress", billingAddressSchema);

export default BillingAddress;