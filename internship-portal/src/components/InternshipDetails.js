import React from 'react';

const InternshipDetails = ({ internship }) => {
    return (
        <div>
            <h2>{internship.title}</h2>
            <p>{internship.description}</p>
            <p>Company: {internship.company}</p>
            <p>Duration: {internship.duration}</p>
        </div>
    );
};

export default InternshipDetails;
