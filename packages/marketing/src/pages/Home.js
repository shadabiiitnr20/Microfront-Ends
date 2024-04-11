import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-4 mt-16">Welcome to Our Website</h1>
      <p className="text-center max-w-lg mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum
        risus ut quam vehicula, eget feugiat nunc placerat. Maecenas nec commodo
        orci. Integer rutrum ligula in fermentum malesuada.
      </p>
      <div className="grid grid-cols-3 gap-4">
        <img
          src="https://source.unsplash.com/random/400x300"
          alt="Random 1"
          className="rounded-lg shadow-lg border border-gray-300"
        />
        <img
          src="https://source.unsplash.com/random/400x300"
          alt="Random 2"
          className="rounded-lg shadow-lg border border-gray-300"
        />
        <img
          src="https://source.unsplash.com/random/400x300"
          alt="Random 3"
          className="rounded-lg shadow-lg border border-gray-300"
        />
      </div>
      <Link to="/pricing">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-8">
          Pricing
        </button>
      </Link>
    </div>
  );
};

export default Home;
