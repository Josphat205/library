import React from "react";
import axios from "axios";
import  toast  from "react-hot-toast";
const BookCard = ({book}) => {
  const { author, title, cost, image, _id} = book;
  const OrderFunc = async (e) => {
    e.preventDefault();
    try {
      const data = {
        bookId: _id,
        customerId: JSON.parse(localStorage.getItem("user_id")),
        initialDate: new Date(),
        deliveryDate: new Date() + 7,
      };
      const res = await axios.post("https://order-service-1b05.onrender.com/order", data);
        toast.success("Order placed successfully");
     
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  return (
    <div className=" md:max-w-[350px] mt-8 w-full h-full drop-shadow-full">
      <a href="#">
        <img
          className="rounded-t-lg w-64 h-48"
          src={image}
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-1xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {author}
        </p>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {cost}
        </p>
        <div
          onClick={OrderFunc}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Order Now
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
