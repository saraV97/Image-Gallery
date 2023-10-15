import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import "../index.css";
import axios from "axios";

const button = () => {
  const handleChange = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("photo", e.target.files[0]);

    axios
      .post("http://localhost:4000/api/save", formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <label className="button" htmlFor="file_picker">
      <IoIosAddCircle size={100} />
      <input
        hidden
        type="file"
        name="file_picker"
        id="file_picker"
        onChange={(e) => handleChange(e)}
      />
    </label>
  );
};

export default button;
