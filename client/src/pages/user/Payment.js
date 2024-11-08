// client/src/pages/user/Payment.js
import React from "react";
import Layout from "../../components/Layout/Layout";
import PaymentComponent from "../../components/PaymentComponent";
import { useAuth } from "../../context/auth";
import { useCart } from "../../context/cart";

const Payment = () => {
  const [auth] = useAuth();
  const [cart] = useCart();

  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Layout title="Checkout - Radiant Ornate">
      <div className="container">
        <h2>Checkout</h2>
        <p>Total Amount: ৳{totalAmount}</p>
        <PaymentComponent auth={auth} cart={cart} totalAmount={totalAmount} />
      </div>
    </Layout>
  );
};

export default Payment;
