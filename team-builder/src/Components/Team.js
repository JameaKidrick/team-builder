import React from "react";

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