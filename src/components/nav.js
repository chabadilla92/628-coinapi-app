import React from "react"
import {Link} from "react-router-dom"
// Link tags change the URL, doesn't refresh the page 

const Nav = (props) => {
    return (
        <div className="nav">
            <Link to="/"> 
            {/* Link to.. the URL */}
                <div>CRYPTO PRICES</div>
            </Link>
            <Link to="/currencies">
                <div>CURRENCIES</div>
            </Link>
        </div>
    )
}

export default Nav