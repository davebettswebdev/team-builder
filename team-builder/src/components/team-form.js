import React, {useState} from 'react';

function TeamForm(props) {

    const [teamMember, setTeamMember] = useState( {
        name: "",
        role: "",
        email: "",
    })

    function handleChange(e) {

        setTeamMember({...teamMember, [e.target.name]: e.target.value})
    }

    function submitForm(e) {

        e.preventDefault();
        props.addTeamMember(teamMember);
        setTeamMember ( {
            name: "",
            role: "",
            email: "",
        })
    }

    return (
        <form on Submit={submitForm}>
            <label htmlForm="name"></label>
            <input 
                id="name"
                type="text"
                name="name"
                title="name"
                placeholder="Team Member Name"
                onChange={handleChange}
                value={teamMember.name}
            />
            <label htmlForm="role"></label>
            <input 
                id="role"
                type="text"
                name="role"
                title="Role"
                placeholder="Role"
                onChange={handleChange}
                value={teamMember.role}
            />
            <label htmlForm="email"></label>
            <input 
                id="email"
                type="email"
                name="email"
                title="Email"
                placeholder="E-mail"
                onChange={handleChange}
                value={teamMember.email}
            />
            <button type="submit">Add Team Member</button>
        </form>
    )
}

export default TeamForm