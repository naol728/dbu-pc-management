import React from "react";
import Button from "../components/Button";

export default function Registration() {



    function handleback() {
        window.history.back();
      }
  return (
    <div className=" flex flex-col items-center h-[95vh] bg-gray-200">
        <button
        className="font-bold absolute left-20 rounded-xl bg-gray-400 px-8 py-2 top-28"
        onClick={handleback}
      >
        {"<-Back"}
      </button>
      <h1 className="text-3xl font-bold mt-10">
        Enter the Information to Regester new PC
      </h1>
      <form>
        <div className="flex flex-col items-center mt-10 space-y-5 ">
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl"> ID number</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl"> Name </label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Department</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Phone No</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Block</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Seial No</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Brand</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
          <div className="flex text-xl font-bold font-mono justify-between w-full">
            <label className="mr-10 text-2xl">Color</label>
            <input
              type="text"
              className="px-2  rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
            />
          </div>
        </div>
        <div className="mt-10 text-center">
          <Button>Register</Button>
        </div>
      </form>
    </div>
  );
}
