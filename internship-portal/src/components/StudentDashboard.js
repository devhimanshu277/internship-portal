import React from 'react';
import { internships } from '../mock/data';

const StudentDashboard = () => {
    return (
        <div>
            <h2>Student Dashboard</h2>
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

export default StudentDashboard;
