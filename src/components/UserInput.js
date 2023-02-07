import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserInput = () => {
    const [userName, setUserName] = useState('');

    const navigate = useNavigate();

    const onsubmitHandler = (e) => {
        e.preventDefault();
        console.log(userName);
        navigate('/user')
    }

    return (
        <div style={{ display: 'flex', height: 'calc(100vh - 50px)', overflow: 'auto', alignItems: 'center', justifyContent: "center" }}>
            <div>
                <div style={{ marginBottom: '10px' }}>
                    Please enter your name!
                </div>

                <form onSubmit={onsubmitHandler}>
                    <div style={{ textAlign: "center" }}>

                        <div style={{ marginBottom: "10px" }}>
                            <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} style={{ borderRadius: '8px', padding: '8px 10px' }} />
                        </div>
                        <button type="submit" style={{ border: '0px', background: '#3b32b3', color: 'white', padding: '10px 30px', borderRadius: '30px', fontWeight: '600' }}>
                            Next
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )

}

export default UserInput;