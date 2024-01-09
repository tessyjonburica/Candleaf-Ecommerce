import React from "react";

function Header(props) {
    return ( 
        <>
        <div>
            <h3>{props.heading}</h3>
        </div>
        </>
     );
}

export default Header;