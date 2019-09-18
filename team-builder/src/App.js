import React, { useState } from "react";
import TeamBuilderForm from './Components/TeamBuilderForm';
import Team from './Components/Team';


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


  return (
    <div>
      <h1> Hello World! </h1>
      <h2> Meet the Team </h2>
      <TeamBuilderForm addNewTeamMember={addNewTeamMember} />
      <Team member={member} />
    </div>
  );
}

export default App;
