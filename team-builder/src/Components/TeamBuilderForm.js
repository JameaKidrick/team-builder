import React, { useState } from "react";

const TeamBuilderForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    // const handleChanges = e => 



    return (
        <form>
            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            // onChange={handleChanges}
            value={member.name}
            />

            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            // onChange={handleChanges}
            value={member.name}
            />

            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            // onChange={handleChanges}
            value={member.name}
            />
        </form>
    )
}

export default TeamBuilderForm;