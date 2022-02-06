import React, { useState } from "react";


function Header({onDarkModeClick, mode}){
    return(
        <header>
            <h2>Shopster</h2>
            <button onClick={onDarkModeClick}>{mode? "Light Mode": "Dark Mode"}</button>
        </header>
    )
}

export default Header; 