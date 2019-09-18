import React, { useState } from "react";
import TeamBuilderForm from './Components/TeamBuilderForm';
import Team from './Components/Team';

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
    <div>
      <h1> Hello World! </h1>
      <h2> Join the Bat-Family </h2>
      <TeamBuilderForm addNewTeamMember={addNewTeamMember} editmember={membertoEdit} />
      <Team member={member} />
    </div>
  );
}

export default App;
