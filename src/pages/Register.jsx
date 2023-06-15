import React from "react";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Register = () => {
  const [data, setData] = React.useState({
    name: "",
    age: "",
    address: "",
  });
  const navigate = useNavigate();
  const { name, age, address} = data;
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
   const handleSubmit = async(e) => {
    e.preventDefault();
    if (name && age && address) {
      const data = {
        name,
        age,
        address,
      };
      const user = await axios.post("https://customer-service-w7xa.onrender.com/customers", data);
      localStorage.setItem("user_id", JSON.stringify(user.data._id));
        toast.success("User created successfully");
        setData({
          name: "",
          age: "",
          address: "",
        });
       navigate("/");
    }
   };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Name
          </label>
          <input
             name="name"
             value={name}
              onChange={handleChange}
            type="text"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter user name"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Age
          </label>
          <input
            name="age"
            value={age}
            onChange={handleChange}
            type="number"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Address
          </label>
          <input
            name="address"
            value={address}
            onChange={handleChange}
            type="text"
            id="password"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default Register;
