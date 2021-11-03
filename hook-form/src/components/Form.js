import React, { useState } from 'react';
import '../App.css'

const Form = (props) => {
    // const [userFirstName, userLastName, userEmail, userPW, userConfirmedPW] = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPW, setConfirmedPW] = useState("");

    const createUser = e => {
        e.preventDefault()

        const newUser = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            confirmedPW: confirmedPW
        };
        console.log("NEW USER: ", newUser);

    }
    return (
        <div className="user-form">
        <form onSubmit={ createUser }>
            <div className="formInput firstName">
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value) }/>
            </div>
            <div className="formInput lastName">
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value) }/>
            </div>
            <div className="formInput email">
                <label>Email: </label>
                <input type="text" onChange={ (e)=> setEmail(e.target.value)} />
            </div>
            <div className="formInput password">
                <label>Password: </label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)} />
            </div>
            <div className="formInput confirmedPW">
                <label>Confirm Password: </label>
                <input type="text" onChange={(e)=> setConfirmedPW(e.target.value)} />
            </div>
        </form>

        <div className="yourData">
            <h5> Your Form Data </h5>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirmed Password: {confirmedPW}</p>
        </div>

        </div>
     );


}

export default Form;
