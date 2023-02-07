import React, { useEffect, useState } from "react";
import UserDataRender from "./UserProfile/components/UserDataRender";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const User = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.post('https://us-central1-oceanfriends-71bae.cloudfunctions.net/getAccessProfiles', {
            data: {
                userId: "sr4Z21Tqg0VupvjEDq5Bg51gosg2",
            },
        }).then(function (response) {
            setUserData(response.data.result.result)
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }, []);

    const profileDataClickHandler = (userProfileId) => {
        console.log("userProfileId: ", userProfileId);
        navigate(`/profile/${userProfileId}`);
    };

    return (
        <div style={{ padding: '10px 20px' }}>
            <div style={{ textAlign: 'center' }}>

                <h1>Users</h1>
            </div>
            <div>
                {userData && userData.length > 0 ? (
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap",
                        }}
                    >
                        {userData.map((user, i) => (
                            <UserDataRender
                                key={i}
                                userData={user}
                                profileDataClickHandler={profileDataClickHandler}
                            />
                        ))}
                    </div>
                ) : (
                    <h2>No User Data Found</h2>
                )}
            </div>
        </div>
    );
};

export default User;
