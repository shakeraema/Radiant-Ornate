import axios from "axios";
import qs from "qs";
import Payment from "../models/Payment.js";

export const initiatePayment = async (req, res) => {
  // console.log("Payment initiation payload:", paymentData);

  try {
    const paymentData = {
      store_id: "radia672dd178456fb",
      store_passwd: "radia672dd178456fb@ssl",
      total_amount: req.body.total_amount,
      currency: "BDT",
      tran_id: `tran_${Date.now()}`,
      success_url: "http://localhost:8080/api/v1/payment/success",
      fail_url: "http://localhost:8080/api/v1/payment/fail",
      cancel_url: "http://localhost:8080/api/v1/payment/cancel",
      cus_name: req.body.cus_name,
      cus_email: req.body.cus_email,
      cus_phone: req.body.cus_phone,
      cus_add1: req.body.cus_addr, // Changed to cus_add1
      cus_city: "Dhaka", // SSLCommerz requires a city field
      cus_country: "Bangladesh", // SSLCommerz requires a country field
      product_name: req.body.product_name || "E-commerce Products", // Fallback to a generic product name if not provided
    };

    const response = await axios.post(
      "https://sandbox.sslcommerz.com/gwprocess/v3/api.php",
      qs.stringify(paymentData), // Use qs.stringify to convert the data to URL-encoded format
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );

    res.status(200).json(response.data);
  } catch (error) {
    console.error("Error initiating payment:", error);
    res.status(500).json({ message: "Payment initiation failed", error });
  }
};

export const paymentSuccess = (req, res) => {
  console.log("Payment was successful:", req.body);
  res.status(200).json({ message: "Payment successful", data: req.body });
};

// export const paymentSuccess = async (req, res) => {
//   console.log("Received payment success data:", req.body); // Log entire req.body

//   // Destructure the fields
//   const {
//     tran_id,
//     amount,
//     status,
//     card_type,
//     card_brand,
//     cus_name,
//     cus_email,
//     cus_phone,
//     cus_add1,
//     tran_date,
//   } = req.body;

//   if (!cus_name || !cus_email || !cus_phone || !cus_add1) {
//     console.error("Missing required fields in payment success data.");
//     return res.status(400).json({ message: "Missing required fields." });
//   }

//   try {
//     // Save payment information to the database
//     const payment = new Payment({
//       tran_id,
//       amount,
//       status,
//       card_type,
//       card_brand,
//       customer_name: cus_name,
//       customer_email: cus_email,
//       customer_phone: cus_phone,
//       customer_address: cus_add1,
//       transaction_date: tran_date,
//     });

//     await payment.save();

//     res.status(200).json({ message: "Payment successful", data: payment });
//   } catch (error) {
//     console.error("Error saving payment data:", error);
//     res.status(500).json({ message: "Failed to save payment data", error });
//   }
// };

export const paymentFail = (req, res) => {
  console.log("Payment failed:", req.body);
  res.status(200).json({ message: "Payment failed", data: req.body });
};

export const paymentCancel = (req, res) => {
  console.log("Payment was cancelled:", req.body);
  res.status(200).json({ message: "Payment cancelled", data: req.body });
};
