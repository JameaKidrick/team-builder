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
  
  
  
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
