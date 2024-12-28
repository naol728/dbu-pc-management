import React, { useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Findpage() {
  const navigate = useNavigate();
  const [find, setFind] = useState("");
  const data = [
    {
      id: 1402037,
      name: "Naol Meseret",
      department: "Software Engineering",
      status: "student",
      phone: "097890867",
      block: 37,
      Brand: "Dell",
      Serialno: 123456,
      color: "black",
    },
  ];

  function handlefind(e) {
    e.preventDefault();
    setFind(e.target.value);
  }
  function handlesubmit(e) {
    e.preventDefault();
  }
  function handleback() {
    navigate("/");
  }

  return (
    <div className="flex flex-col items-center  h-[85vh]">
      <button
        className="font-bold absolute left-20 rounded-xl bg-gray-400 px-8 py-2 top-28"
        onClick={handleback}
      >
        {"<-Back"}
      </button>
      <div className="flex justify-between items-center mt-4 ">
        <form onSubmit={handlesubmit}>
          <label className="font-extrabold text-2xl  mr-3 ">Enter ID</label>
          <input
            type="text"
            value={find}
            onChange={handlefind}
            className="p-2 bg-gray-200 rounded-md shadow-xl mr-4 w-72 font-bold text-lg focus:ring-4 focus:ring-gray-400"
          />
          <Button type="submit">Find Student </Button>
        </form>
      </div>

      <div className=" mt-16 w-3/4 font-mono">
        {data.length > 0 ? (
          data.map((item) => (
            <ul className="bg-gray-200  rounded-2xl w-full shadow-xl p-10">
              <li className="text-center font-mono font-bold text-2xl underline mb-3">
                Information
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold"> {"Id number:"}</span>
                {item.id}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold"> {"Name:"}</span>
                {item.name}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold">{"department:"}</span>
                {item.department}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold">{"status:"}</span>
                {item.status}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold">{"Phone number:"}</span>
                {item.phone}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold"> {"Block:"}</span>
                {item.block}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold">{"Pc Brand:"}</span>
                {item.Brand}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold"> {"pc Serialno:"}</span>
                {item.Serialno}
              </li>
              <li className="flex justify-between  text-2xl">
                <span className="font-bold">{"PC color:"}</span>
                {item.color}
              </li>
            </ul>
          ))
        ) : (
          <h1 className="flex mt-20 justify-center items-center h-full text-4xl font-bold">
            {" "}
            No data found{" "}
          </h1>
        )}
      </div>
    </div>
  );
}
