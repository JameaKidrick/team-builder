import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import clsx from 'clsx'

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
    // STYLING
    const useStyles = makeStyles(theme => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            
        },
        dense: {
            marginTop: theme.spacing(0),
            
        },
        button: {
            margin: theme.spacing(1)
        },
        }));

    // BUILDING FORM
    const classes = useStyles();

    const [member, setMember] = useState({name: '', email: '', role: ''});
    const handleChanges = e => {
        setMember({...member, [e.target.name]:e.target.value})
    }

    const submitForm = e => {
        e.preventDefault();
        props.addNewTeamMember(member);
        setMember({name: '', email: '', role: ''});
    };

    // STRETCH STEP 3
        // CREATE USEEFFECT TO SYNC EDIT THEREBY UPDATING MEMBER STATE OBJECT
    useEffect(() => {
        props.membertoEdit(member);
        setMember({...member, [member.name]:member.value})
    }, []);

    return (
        <form className={classes.container} onSubmit = {submitForm}>
            <label htmlFor='name'></label>
            <TextField 
            id='name'
            className={clsx (classes.textField, classes.dense)}
            variant="outlined"
            label="Name"
            // type='text'
            name='name'
            onChange={handleChanges}
            value={member.name}
            />

            <label htmlFor='email'></label>
            <TextField 
            id='email'
            className={clsx (classes.textField, classes.dense)}
            variant="outlined"
            label="Email"
            type='text'
            name='email'
            onChange={handleChanges}
            value={member.email}
            />

            <label htmlFor='role'></label>
            <TextField  
            id='role'
            className={clsx (classes.textField, classes.dense)}
            variant="outlined"
            label="Role"
            type='text'
            name='role'
            onChange={handleChanges}
            value={member.role}
            />
            <Button variant='outlined' color="inherit" className={classes.button} type='submit'>Add Member</Button>
        </form>
    )
}

export default TeamBuilderForm;