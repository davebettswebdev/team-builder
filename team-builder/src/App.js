import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TeamMember from "./components/team-member"
import TeamForm from "./components/team-form"

function App() {
  const [teamMember, setTeamMember] = useState( [
    {
      id: 1,
      name: "David Betts",
      role: "Team Member",
      email: "dave@davebetts.net"

    }
  ]);

  const addTeamMember = member => {
    const newTeamMember = {
      id: Date.now(),
      name: member.name,
      role: member.role,
      email: member.email
    };
    setTeamMember([...teamMember, newTeamMember]);
  };
  return (
    <div className="App">
      <h1>Web26 Team Gallucci</h1>
      <TeamForm addTeamMember={addTeamMember}/>
      <TeamMember teamMember={teamMember}/>
    </div>
  );
}

export default App;
