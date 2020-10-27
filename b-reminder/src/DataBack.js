import React, { useState } from "react";
import { birthdays } from "./DataB";
import './app.css'

function DataBack() {
    const [birth , setBirth] = useState(birthdays)

    const dateT = new Date()
    
  
return (
<>



{

birth.map((people) => {

    const {name, day, month, age, image} = people



return <article className="names">

<h2>
{  dateT.getDate() === day && dateT.getMonth() === month  ? 

    <div>

    <h1>
    {name}
    </h1>
    
    <h2>
    {age}
    </h2>

<img src={image}></img>


    </div>  


: ''}
  </h2>

    </article>
})
}

<button className='btn' onClick={() => {setBirth([])}}> Clear All </button>

</>
)
}

export default DataBack
