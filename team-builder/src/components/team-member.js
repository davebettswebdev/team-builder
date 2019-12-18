import React from 'react';

function TeamMember(props) {
    return (
        <div className="teamList">
            {props.TeamMember.map ( teamMember => (
                <div key={teamMember.id} className="teamMember">
                    <h2>Name: {teamMember.name}</h2>
                    <p>Email: {teamMember.email}</p>
                    <p>Role: {teamMember.role}</p>
                </div>
            ))}
        </div>
    )
}

export default TeamMember;