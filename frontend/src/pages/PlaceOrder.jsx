import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "./CartTotal";
import { assets } from "../assets/frontend_assets/assets";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const [method, setMethod] = useState("cod");
  const {
    navigate,
    backendUrl,
    token,
    cartItem,
    setCartItem,
    getCartAmount,
    deliveryCharge,
    products,
  } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData((data) => ({ ...data, [name]: value }));
  };

  const openWhatsApp = () => {
    window.open("https://wa.me/923201429623", "_blank");
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!token) {
      toast.error("Please login to continue");
      navigate("/login");
    }
    try {
      let orderItems = [];

      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const itemInfo = structuredClone(
              products.find((product) => product._id === items)
            );

            if (itemInfo) {
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + deliveryCharge,
      };

      switch (method) {
        // Api calls for COD
        case "cod": {
          const response = await axios.post(
            backendUrl + "/api/order/place",
            orderData,
            { headers: { token } }
          );
          if (response.data.success) {
            setCartItem({});
            toast.success("Order Placed Successfully");
            navigate("/orders");
          } else {
            toast.error(response.data.msg);
          }
          break;
        }
        case "stripe": {
          const response = await axios.post(
            backendUrl + "/api/order/stripe",
            orderData,
            {
              headers: { token },
            }
          );
          if (response.data.success) {
            const { session_url } = response.data;
            window.location.replace(session_url);
          } else {
            toast.error(response.data.message);
          }
          break;
        }

        default:
          break;
      }
    } catch (error) {
      console.log(error);
      toast.error(error.msg);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t"
    >
      {/* ---------------------Left Side----------------- */}
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>

        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="firstName"
            value={formData.firstName}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="text"
            placeholder="First Name"
            required
          />
          <input
            onChange={onChangeHandler}
            name="lastName"
            value={formData.lastName}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="text"
            placeholder="Last Name"
            required
          />
        </div>

        <input
          onChange={onChangeHandler}
          name="email"
          value={formData.email}
          className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
          type="email"
          placeholder="Email Address"
          required
        />
        <input
          onChange={onChangeHandler}
          name="street"
          value={formData.street}
          className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
          type="text"
          placeholder="Street"
          required
        />

        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="city"
            value={formData.city}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="text"
            placeholder="City"
            required
          />
          <input
            onChange={onChangeHandler}
            name="state"
            value={formData.state}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="text"
            placeholder="State"
            required
          />
        </div>
        <div className="flex gap-3">
          <input
            onChange={onChangeHandler}
            name="zipcode"
            value={formData.zipcode}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="number"
            placeholder="Zip Code"
            required
          />
          <input
            onChange={onChangeHandler}
            name="country"
            value={formData.country}
            className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
            type="text"
            placeholder="Country"
            required
          />
        </div>
        <input
          onChange={onChangeHandler}
          name="phone"
          value={formData.phone}
          className="w-full rounded-md border border-gray-300 bg-white px-3.5 py-2 
             text-gray-900 shadow-sm transition-all duration-300 
             focus:border-gray-500 focus:ring-1 focus:ring-gray-500 
             outline-none"
          type="number"
          placeholder="Phone"
          required
        />
      </div>

      {/* ---------------------Right Side---------------- */}

      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>

        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ----------------Payment method selection--------------- */}
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300  rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>
            <div
              onClick={() => {
                setMethod("whatsapp");
                openWhatsApp();
              }}
              className="flex items-center gap-3 border border-gray-400 p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300  rounded-full ${
                  method === "whatsapp" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.whatsapp_icon} alt="" />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border border-gray-400  p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-300 rounded-full ${
                  method === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="uppercase text-sm text-gray-500 font-medium mx-4">
                Cash on Deleivery
              </p>
            </div>
          </div>

          <div className="w-full text-end mt-8">
            <button
              type="submit"
              className="bg-black text-white text-sm my-8 px-8 py-3 cursor-pointer 
             transition-all duration-300 ease-out
             hover:bg-gray-900 hover:shadow-lg hover:-translate-y-1
             active:scale-95 active:shadow-md"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
