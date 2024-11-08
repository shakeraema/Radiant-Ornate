import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import toast from "react-hot-toast";

const CheckoutPage = () => {
  const [cart] = useCart();
  const [auth] = useAuth();
  const [loading, setLoading] = useState(false);

  // Calculate Total Price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const handlePayment = async () => {
    setLoading(true);
    try {
      // Initiate payment request to backend
      const response = await axios.post("/api/v1/payment/initiate", {
        total_amount: totalPrice,
        currency: "BDT",
        cus_name: auth?.user?.name,
        cus_email: auth?.user?.email,
        cus_phone: auth?.user?.phone,
        cus_addr: auth?.user?.address,
        product_name: "Cart Products",
      });

      setLoading(false);

      if (response.data?.GatewayPageURL) {
        // Redirect user to SSLCommerz payment page
        window.location.href = response.data.GatewayPageURL;
      } else {
        console.log("Payment initiation response:", response.data);
        toast.error("Failed to initiate payment. Please try again.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Payment initiation error:", error);
      toast.error("An error occurred while initiating payment.");
    }
  };

  return (
    <Layout title="Checkout - Radiant Ornate">
      <div className="container mt-3">
        <h2 className="text-center">Checkout</h2>
        <div className="row">
          <div className="col-md-8">
            {cart.map((item, index) => (
              <div key={item._id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={`/api/v1/product/product-photo/${item._id}`}
                      className="img-fluid rounded-start"
                      alt={item.name}
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                      <p className="card-text">{item.description}</p>
                      <p className="card-text">Price: ৳{item.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-4">
            <div className="card p-3">
              <h4>Total Price: ৳{totalPrice.toFixed(2)}</h4>
              <button
                className="btn btn-primary w-100 mt-3"
                onClick={handlePayment}
                disabled={loading}>
                {loading ? "Processing..." : "Proceed to Payment"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CheckoutPage;
