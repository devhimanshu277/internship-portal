import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import Profile from '../components/Profile';

const ProfilePage = () => {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <p>Please log in to view your profile.</p>;
    }

    return (
        <div>
            <h1>Profile</h1>
            <Profile user={user} />
        </div>
    );
};

export default ProfilePage;
