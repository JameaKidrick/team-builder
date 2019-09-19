import React from "react";
;

// STEP 5 
    // CREATE FUNCTION THAT RETURNS MEMBER INFORMATION USING PROPS FOR APP'S USESTATE (HERE IT IS 'MEMBER')
// STEP 6 EXPORT
    // EXPORT DEFAULT
// GO TO TEAMBUILDERFORM.JS FOR STEP 7

const cardStyle = {
    background: 'skyblue',
    width: '20%',
    // display: 'flex',
}


const Team = props => {
    return (
        <>
            {props.member.map(person => (
                <div style={cardStyle} className='person' key={person.id}>
                    {/*   STRETCH STEP 1 */}
                        {/* ADDED BUTTON FOR EDIT */}
                    <button onClick={props.membertoEdit}><i class="fas fa-edit"></i></button>
                    <h2>{person.name}</h2>
                    <p>{person.email}</p>
                    <p>{person.role}</p>
                </div>
            ))}
        </>
    )
}

export default Team;