import React, { useState } from "react";
import './app.css'
import DataBack from './DataBack'


function MainPage() {
 

return (
<>

<div className="main">
   
<section className="birthdays">
    <h2>Birthdays Today { document.querySelectorAll('.userDetails').length}</h2>
<DataBack />
</section>

</div>
</>
)

}

export default MainPage;
