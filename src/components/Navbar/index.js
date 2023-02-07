import React from "react";

const Navbar = () => {
    return (
        <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #EBEBEB', height: '50px' }}>
            <div>
                <a href="">Home</a>
            </div>
            <div>
                <a href="">Login</a>
                <a href="">Sign up</a>
            </div>
        </div>
    )

}

export default Navbar;