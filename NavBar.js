import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <li><Link to="/">Cards</Link></li>
                <li><Link to="/add-card">Add Card</Link></li>
            </ul>
        </div>
    )
}
export default NavBar