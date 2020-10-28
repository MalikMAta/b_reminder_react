import React, { useState } from "react";
import { birthdays } from "./DataB";
import "./app.css";

function Add() {
  const [birth, setBirth] = useState(birthdays);

  const updateObject = (e) => {

    setBirth(prevBirth => ({
      ...prevBirth,
      [e.target.name]: e.target.value,
    }));
  };

  const printValues = (e) => {
    e.preventDefault();
    console.log(
    
    );
    console.log(birth);
  };

  return (
    <>
      <div className="newField">
        <form onSubmit={printValues}>
          <input
            type="text"
            placeholder="unique digit key Ex: 23"
            name="key"
            value={birth.key}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="name"
            name="name"
            value={birth.name}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="month Ex: 11"
            name="month"
            value={birth.month}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="day Ex: 29"
            name="day"
            value={birth.day}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="birth year Ex: 2020"
            name="year"
            value={birth.year}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="age"
            name="age"
            value={birth.age}
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="Image URL"
            name="image"
            value={birth.image}
            onChange={updateObject}
          ></input>

          <button className="btn">Add birthday to the list</button>
        </form>
      </div>
    </>
  );
}

export default Add;
