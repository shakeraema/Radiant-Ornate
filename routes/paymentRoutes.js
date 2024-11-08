// routes/paymentRoutes.js
import express from "express";
import {
  initiatePayment,
  paymentSuccess,
  paymentFail,
  paymentCancel,
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/initiate", initiatePayment);
// Route for payment success
router.post('/success', paymentSuccess);

// Route for payment failure
router.post('/fail', paymentFail);

// Route for payment cancellation
router.post('/cancel', paymentCancel);

export default router;
