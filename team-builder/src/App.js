import React, { useState } from "react";
import TeamBuilderForm from './Components/TeamBuilderForm';
import Team from './Components/Team';
import background from './Images/gotham-city.jpg'
import { ImageBackground } from './'


// STYLING
const ContainerStyles = {
  backgroundImage: 'url(background)',
  textAlign:'center',
  paddingLeft: '3%'
}

const cardStyles = {
  marginTop: '5%',
  display: 'flex',
  flexWrap: 'wrap',

}


// STEP 1 
  // CREATE USESTATE FOR EXISTING MEMBER LOG
// STEP 2 
  // CREATE FUNCTION FOR ADDING NEW MEMBERS
  // MAKE SURE TO PASS SETTER METHOD
// STEP 3 
  // ADD RETURN WITH DIV THAT SAYS 'HELLO WORLD' AS A TEST
// STEP 4 EXPORT
  // EXPORT DEFAULT
// GO TO TEAM.JS FOR STEP 5
// ...
// STEP 11
  // WITHIN RETURN ADD FORM AND TEAM COMPONENTS WITH REFERENCES TO THE STATE USED IN THE TEAM COMPONENT AND THE FUNCTION USED IN THE FORM COMPONENT

// BUILDING APP
function App() {
  const [member, setMember] = useState([
    {
      id: 0,
      name: 'Batman',
      email: 'darkknight1939@aol.com',
      role: 'Caped Crusader'
    },
    {
      id: 1,
      name: 'Robin',
      email: 'robin@gmail.com',
      role: 'Sidekick'
    },
    {
      id: 2,
      name: 'Nightwing',
      email: 'NiGhTwInG.84@gmail.com',
      role: 'Superhero'
    },
    {
      id: 3,
      name: 'Batgirl',
      email: 'bgirl@gmail.com',
      role: 'Superhero'
    },
    {
      id: 4,
      name: 'Red Hood',
      email: 'underthehood@gmail.com',
      role: 'Vigilante'
    },
    {
      id: 5,
      name: 'Red Robin',
      email: 'RR@gmail.com',
      role: 'Teen Titans Leader'
    },
    {
      id: 6,
      name: 'Batwoman',
      email: 'LadyBat@gmail.com',
      role: 'Superhero'
    }
  ]);

  const addNewTeamMember = person => {
    const newMember = {
      id: Date.now(),
      name: person.name,
      email: person.email,
      role: person.role
    };
    setMember([...member, newMember]);
  };

  // STRETCH STEP 2
    // ADDING STATE PROPERTY FOR MEMBER EDITING
  const membertoEdit = update => {
    const newInfo = {
      id: Date.now(),
      name: update.name,
      email: update.email,
      role: update.role
    };
    setMember([...member], newInfo)
  }


  return (
    <div style={ContainerStyles}>
      <h1> Hello Gotham City! </h1>
      <h2> Join the Bat-Family </h2>
      <TeamBuilderForm addNewTeamMember={addNewTeamMember} membertoEdit={membertoEdit} />
      <div style={cardStyles}>
        <Team member={member} membertoEdit={membertoEdit} />
      </div>
    </div>
  );





}

export default App;


// STYLING
