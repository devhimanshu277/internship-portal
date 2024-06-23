import React from 'react';
import { internships } from '../mock/data';

const InternshipList = () => {
    return (
        <div>
            <h2>Available Internships</h2>
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

export default InternshipList;
