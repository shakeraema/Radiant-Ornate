import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
  {
    tran_id: { type: String, required: true, unique: true },
    amount: { type: Number, required: true },
    status: { type: String, required: true },
    card_type: { type: String },
    card_brand: { type: String },
    customer_name: { type: String, required: true },
    customer_email: { type: String, required: true },
    customer_phone: { type: String, required: true },
    customer_address: { type: String, required: true },
    transaction_date: { type: Date, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", paymentSchema);