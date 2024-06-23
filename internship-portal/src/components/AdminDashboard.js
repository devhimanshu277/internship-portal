import React from 'react';
import { internships } from '../mock/data';

const AdminDashboard = () => {
    return (
        <div>
            <h2>Admin Dashboard</h2>
            <ul>
                {internships.map((internship) => (
                    <li key={internship.id}>
                        {internship.title} at {internship.company}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
