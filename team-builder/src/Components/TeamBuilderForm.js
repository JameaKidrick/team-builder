import React, { useState } from "react";

// STEP 7 
    // CREATE TEAMBUILDERFORM FUNCTION WHICH WILL INCLUDE A USESTATE WITH KEY:VALUE PAIRS
    // THE KEY NAMES WILL BE FORM THE KEY:VALUE PAIRS IN THE OBJECT CREATED IN APP.JS
    // SET METHOD TO CURRENT MEMBER LIST + NEW MEMBER WITHIN CHANGE HANDLER FUNCTION
// STEP 8 
    // ADD RETURN WHICH CONTAINS THE FORM (LABEL, INPUT AND BUTTON)
    // MAKE SURE TO ADD ONCHANGE WHICH WILL BE SET TO HANDLER FUNCTION
// STEP 9 
    // TO ALLOW NEW MEMBERS TO BE ADDED UPON SUBMISSION, CREATE A SUBMIT FUNCTION WITH PROPS ATTACHED TO FUNCTION USED IN APP.JS TO ADD NEW MEMBERS
    // USE THE SET METHOD TO SET INFORMATION
    // PREVENT DEFAULT OTHERWISE SUBMISSION CAUSES PAGE TO RELOAD AND NOT COLLECT INFORMATION
// STEP 10
    // ADD ONSUBMIT TO THE FORM USING THE SUBMIT FUNCTION
// GO TO APP.JS FOR STEP 11

const TeamBuilderForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    const handleChanges = e => {
        setMember({...member, [e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(member);
        setMember({name: '', email: '', role: ''});
    };


    return (
        <form onSubmit = {submitForm}>
            <label htmlFor='name'>Name</label>
            <input 
            id='name'
            type='text'
            name='name'
            onChange={handleChanges}
            value={member.name}
            />

            <label htmlFor='email'>Email</label>
            <input 
            id='email'
            type='text'
            name='email'
            onChange={handleChanges}
            value={member.email}
            />

            <label htmlFor='role'>Role</label>
            <input 
            id='role'
            type='text'
            name='role'
            onChange={handleChanges}
            value={member.role}
            />
            <button type='submit'>Add Member</button>
        </form>
    )
}

export default TeamBuilderForm;