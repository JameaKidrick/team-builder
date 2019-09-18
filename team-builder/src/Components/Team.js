import React from "react";

// STEP 5 
    // CREATE FUNCTION THAT RETURNS MEMBER INFORMATION USING PROPS FOR APP'S USESTATE (HERE IT IS 'MEMBER')
// STEP 6 EXPORT
    // EXPORT DEFAULT
// GO TO TEAMBUILDERFORM.JS FOR STEP 7

const Team = props => {
    return (
        <>
            {props.member.map(person => (
                <div className='person' key={person.id}>
                    <h2>{person.name}</h2>
                    <p>{person.email}</p>
                    <p>{person.role}</p>
                </div>
            ))}
        </>
    )
}

export default Team;