import React, { useState } from "react";
import { birthdays } from "./DataB";
import "./app.css";
import Add from "./Add";

function DataBack() {
  const [birth, setBirth] = useState(birthdays);

  const dateT = new Date();
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

      <Add />
    </>
  );
}

export default DataBack;
