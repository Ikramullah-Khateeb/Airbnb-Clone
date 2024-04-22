import React from "react"
import  "../index.css"
function Navbar() {
    return (
        <nav>
            <img src={require("../images/Airbnb-Logo.png")} className="nav--logo" />
        </nav>
    )
}
export default Navbar