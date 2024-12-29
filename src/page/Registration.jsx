import React, { useState } from "react";
import Button from "../components/Button";
import Loading from "../components/Loading";

export default function Registration() {
  const [formdata, setFormdata] = useState({
    id: "",
    name: "",
    department: "",
    phone: "",
    block: "",
    Brand: "",
    Serialno: "",
    color: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
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
  function handlechange(e) {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  }
  async function handlesubmit(e) {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("http://localhost:8000/information", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      if (res.ok) {
        setMessage("form submited successfuly");
        setFormdata({
          id: "",
          name: "",
          department: "",
          phone: "",
          block: "",
          Brand: "",
          Serialno: "",
          color: "",
        });
        setTimeout(() => {
          setMessage("");
        }, 3000);
      } else {
        setError(true);
        setMessage("Error while sending data");
        setTimeout(() => {
          setMessage("");
        }, 3000);
      }
    } catch (err) {
      setError(true);
      setMessage("Error while sending data");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      console.log("err:", err);
    } finally {
      setLoading(false);
    }
  }

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
      <div className="absolute right-8 top-28 ">
        {message && (
          <div className=" bg-green-500 px-8 py-2 font-extrabold rounded-lg shadow-lg">
            ✅{message}
          </div>
        )}
        {error && (
          <div className=" bg-red-500 px-8 py-2 font-extrabold rounded-lg shadow-lg">
            ⚠️{error}
          </div>
        )}
      </div>
      <h1 className="text-3xl font-bold mt-10">
        Enter the Information to Regester new PC
      </h1>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handlesubmit}>
          <div className="flex flex-col items-center mt-10 space-y-5 ">
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl"> ID number</label>
              <input
                type="text"
                name="id"
                onChange={handlechange}
                required
                value={formdata.id}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl"> Name </label>
              <input
                type="text"
                name="name"
                onChange={handlechange}
                required
                value={formdata.name}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Department</label>
              <input
                type="text"
                name="department"
                onChange={handlechange}
                required
                value={formdata.department}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Phone No</label>
              <input
                type="number"
                name="phone"
                onChange={handlechange}
                required
                value={formdata.phone}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Block</label>
              <input
                type="text"
                name="block"
                onChange={handlechange}
                required
                value={formdata.block}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Seial No</label>
              <input
                type="text"
                name="Serialno"
                onChange={handlechange}
                required
                value={formdata.Serialno}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Brand</label>
              <input
                type="text"
                name="Brand"
                onChange={handlechange}
                required
                value={formdata.Brand}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
            <div className="flex text-xl font-bold font-mono justify-between w-full">
              <label className="mr-10 text-2xl">Color</label>
              <input
                type="text"
                name="color"
                onChange={handlechange}
                required
                value={formdata.color}
                className="px-2  rounded-md shadow-xl mr-4 w-80 font-bold text-lg focus:ring-4 focus:ring-gray-400"
              />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Button type="submit">Register</Button>
          </div>
        </form>
      )}
    </div>
  );
}
