import React, { useState } from "react";
import { birthdays } from "./DataB";
import "./app.css";

function DataBack() {
  const [birth, setBirth] = useState(birthdays);

  const dateT = new Date();

  return (
    <>


    {birth.map((people) => {
        const {name, day, month, age, image, key} = people


        return (
            <>

        {dateT.getDate() === day && dateT.getMonth() === month ? 
        
        <article className="userDetails" key={key}> 
        <div className="image" alt="" >
         <img src={image}></img>
        </div>

        <div className="details">
        <h1>{name}</h1>
        <h2>{age}</h2>
        </div>
        
       </article>
        : ""}
    
            


        </>
        )

    })}






      {/* {birth.map((people) => {
        const { name, day, month, age, image } = people;

        return (
          <>
            <article className="names">
              {dateT.getDate() === day && dateT.getMonth() === month ? (
                <div>
                  {" "}
                  <img src={image}></img>
                  <h1>{name}</h1>
                  <h2>{age}</h2>
                  <img src={image}></img>
                </div>
              ) : (
                ""
              )}
            </article>
          </>
        );
      })} */}

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
      <input type ="text" placeholder="name"></input>

      <input type ="text" placeholder="age"></input>

      <input type ="text" placeholder="birth year Ex: 2020"></input>

      <input type ="text" placeholder="month Ex: 11"></input>

      <input type ="text" placeholder="day Ex: 29"></input>

      <input type ="text" placeholder="unique digit key Ex: 23"></input>

      <input type ="text" placeholder="Image URL" ></input>

      <button className="btn">Add birthday to the list</button>

      </div>
    </>
  );
}

export default DataBack;
