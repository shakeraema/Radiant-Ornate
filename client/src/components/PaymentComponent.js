import React from "react";
import axios from "axios";

const PaymentComponent = ({ auth, cart, totalAmount }) => {
  const initiatePayment = async () => {
    try {
      const response = await axios.post("/api/v1/payment/initiate", {
        amount: totalAmount,
        cus_name: auth.user?.name,
        cus_email: auth.user?.email,
        cus_phone: auth.user?.phone || "N/A",
      });
      window.location.href = response.data.url; // Redirect to SSLCommerz payment page
    } catch (error) {
      console.error("Payment initiation failed", error);
    }
  };

  return (
    <button onClick={initiatePayment} className="btn btn-primary">
      Proceed to Payment
    </button>
  );
};

export default PaymentComponent;