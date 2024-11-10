import React from "react";
import axios from "axios";

const PaymentComponent = ({ auth, cart, totalAmount }) => {
  const initiatePayment = async () => {
    try {
      // Prepare the request data
      const response = await axios.post("/api/v1/payment/initiate", {
        cart,
        cus_name: auth.user?.name || "Guest",
        cus_email: auth.user?.email || "guest@example.com",
        cus_phone: auth.user?.phone || "N/A",
        cus_addr: auth.user?.address || "N/A",
      });

      if (response.data.GatewayPageURL) {
        window.location.href = response.data.GatewayPageURL;
      } else {
        console.error("Payment initiation failed: No GatewayPageURL found");
      }
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