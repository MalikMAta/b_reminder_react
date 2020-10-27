import React, { useState } from "react";
import { birthdays } from "./DataB";
import "./app.css";

function DataBack() {
  const [birth, setBirth] = useState(birthdays);
  //   const [number, setNumber ] = useState(0)
  const dateT = new Date();

  const updateObject = (e) => {
    e.preventDefault();

    setBirth({
      ...birth,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {birth.map((people) => {
        const { name, day, month, age, image, key } = people;

        const numbers = [];

        return (
          <>
            {dateT.getDate() === day && dateT.getMonth() === month ? (
              <article className="userDetails" key={key}>
                <div className="image" alt="">
                  <img src={image}></img>
                </div>

                <div className="details">
                  <h1>{name} </h1>
                  <p>{age} Years</p>
                </div>
              </article>
            ) : (
              ""
            )}
          </>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          setBirth([]);
        }}
      >
        {" "}
        Clear All{" "}
      </button>

      <div className="newField">
        <form>
          <input
            type="text"
            placeholder="name"
            name="name"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="age"
            name="age"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="birth year Ex: 2020"
            name="year"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="month Ex: 11"
            name="month"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="day Ex: 29"
            name="day"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="unique digit key Ex: 23"
            name="key"
            onChange={updateObject}
          ></input>

          <input
            type="text"
            placeholder="Image URL"
            name="image"
            onChange={updateObject}
          ></input>

          <button className="btn">Add birthday to the list</button>
        </form>
      </div>
    </>
  );
}

export default DataBack;
