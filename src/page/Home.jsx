import React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-[87vh] bg-gray-200">
      <div className="flex items-center flex-col">
        <div className=" text-xl sm:text-4xl font-extrabold mb-16 font-serif">
          Wellcome to debre brhan universty pc managemnt{" "}
          <span className="block text-center mt-3">System</span>
        </div>
        <div className="flex space-x-10">
          <Link to="/registration">
            <Button>Register pc</Button>
          </Link>
          <Link to="/find">
            <Button>Find pc</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
