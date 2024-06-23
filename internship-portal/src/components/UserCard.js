import React from 'react';

const UserCard = ({ user }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
};

export default UserCard;
