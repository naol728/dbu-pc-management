import React from "react";

export default function Button({ children, type }) {
  return (
    <button
      className="bg-gray-800 px-10 py-2 shadow-lg text-white font-bold  rounded-md"
      type={type}
    >
      {children}
    </button>
  );
}
