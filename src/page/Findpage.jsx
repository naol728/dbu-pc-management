import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

export default function Findpage() {
  const navigate = useNavigate();
  const [find, setFind] = useState("");
  const [apidata, setApidata] = useState([]);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch("http://localhost:8000/information");
      const data = await res.json();
      setApidata(data);
    }
    fetchdata();
  }, []);

  function handlefind(e) {
    setFind(e.target.value);
  }

  function handlesubmit(e) {
    e.preventDefault();
    const founddata = apidata.find((item) => item.id == find);
    console.log("this is from the found page");
    if (founddata) {
      setData(founddata);
    } else {
      setData(null);
      alert("no data found");
    }
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
        {data ? (
          <ul className="bg-gray-200  rounded-2xl w-full shadow-xl p-10">
            <li className="text-center font-mono font-bold text-2xl underline mb-3">
              Information
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold"> {"Id number:"}</span>
              {data.id}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold"> {"Name:"}</span>
              {data.name}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold">{"department:"}</span>
              {data.department}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold">{"status:"}</span>
              {data.status}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold">{"Phone number:"}</span>
              {data.phone}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold"> {"Block:"}</span>
              {data.block}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold">{"Pc Brand:"}</span>
              {data.Brand}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold"> {"pc Serialno:"}</span>
              {data.Serialno}
            </li>
            <li className="flex justify-between  text-2xl">
              <span className="font-bold">{"PC color:"}</span>
              {data.color}
            </li>
          </ul>
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
