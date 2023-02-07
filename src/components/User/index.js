import React, { useEffect, useState } from "react";
import UserDataRender from "./UserProfile/components/UserDataRender";
import { useNavigate } from "react-router-dom";

const User = () => {
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(
            "/getAccessProfiles",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: {
                        userId: "sr4Z21Tqg0VupvjEDq5Bg51gosg2",
                    },
                }),
            }
        )
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
                setUserData(data.result.result);
            })
            .catch((err) => {
                console.error(err);
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
