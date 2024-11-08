// controllers/paymentController.js
import axios from "axios";
import qs from "qs";

export const initiatePayment = async (req, res) => {
  try {
    const paymentData = {
      store_id: "radia672db9ffdb456",
      store_passwd: "radia672db9ffdb456@ssl",
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

export const paymentFail = (req, res) => {
  console.log("Payment failed:", req.body);
  res.status(200).json({ message: "Payment failed", data: req.body });
};

export const paymentCancel = (req, res) => {
  console.log("Payment was cancelled:", req.body);
  res.status(200).json({ message: "Payment cancelled", data: req.body });
};
