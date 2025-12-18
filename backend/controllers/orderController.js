import orderModel from "../model/orderModel.js";
import userModel from "../model/userModel.js";

// placing order using COD method

const placeOrder = async (req, res) => {
  try {
    const { userId, items, amount, address } = req.body;

    // Validation
    if (!userId || !items || !amount || !address) {
      return res.json({ success: false, message: "Missing required fields" });
    }

    if (items.length === 0) {
      return res.json({ success: false, msg: "Cart is empty" });
    }

    const orderData = {
      userId,
      items,
      amount,
      address,
      status: "Order Placed",
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    // Clear user's cart after order is placed
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({
      success: true,
      message: "Order placed successfully",
      orderId: newOrder._id,
    });
  } catch (error) {
    console.error("Error placing order:", error);
    res.json({
      success: false,
      message: error.message || "Failed to place order",
    });
  }
};

// placing order using Stripe method

const placeOrderStripe = async (req, res) => {};

// placing order using Razor method

const placeOrderRazorpay = async (req, res) => {};

// All orders Data for admin panel

const allOrders = async (req, res) => {};

// User orders data for frontend

const userOrders = async (req, res) => {
  try {
    const { userId } = req.body;
    const orders = await orderModel.find({ userId });
    res.json({ success: true, orders });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// update order status admin panel

const updateOrderStatus = async (req, res) => {};

export {
  placeOrder,
  placeOrderStripe,
  placeOrderRazorpay,
  allOrders,
  userOrders,
  updateOrderStatus,
};
