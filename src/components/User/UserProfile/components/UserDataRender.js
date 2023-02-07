import React from "react";

const UserDataRender = (props) => {
    const { userData, profileDataClickHandler } = props;

    return (
        <div
            style={{
                border: "1px solid #EBEBEb",
                borderRadius: "8px",
                padding: "10px 20px",
                width: '350px',
                cursor: 'pointer'
            }}
            onClick={() => profileDataClickHandler(userData.profileId)}
        >
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <h3>
                    {userData.name}
                </h3>
            </div>
            <div>
                <div>
                    <div>DOB: <strong>{userData.dob}</strong></div>
                </div>
                <div >
                    <div style={{ display: 'flex' }}>
                        AccId:&nbsp;
                        <div style={{ width: '280px', overflow: "hidden", textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{userData.accId}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDataRender;
