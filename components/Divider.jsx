import React from "react";

const Divider = ({ heading, text }) => {
  return (
    <header className="text-center my-8">
      <h2 className="text-xl font-bold text-gray-900 sm:text-3xl capitalize">{heading}</h2>

      <p className="max-w-md mx-auto mt-3 text-gray-500 capitalize">{text}</p>
    </header>
  );
};

export default Divider;
