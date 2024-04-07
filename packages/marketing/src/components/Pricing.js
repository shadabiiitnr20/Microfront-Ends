import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center m-8">
      <h1 className="text-4xl mb-4 mt-16">Our Pricing Plans</h1>
      <Link to="/">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 m-2 mb-8 rounded mr-4">
         Home
        </button>
      </Link>
      <div className="grid grid-cols-3 gap-4">
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Basic</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum risus ut quam vehicula.
          </p>
          <p className="text-2xl font-bold">$9.99/month</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Pro</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum risus ut quam vehicula.
          </p>
          <p className="text-2xl font-bold">$19.99/month</p>
        </div>
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-semibold mb-2">Premium</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vestibulum risus ut quam vehicula.
          </p>
          <p className="text-2xl font-bold">$29.99/month</p>
        </div>
      </div>
      <div className="flex mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
          Login
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Pricing;
