import React, { useState } from 'react';
import '../App.css'

const Form = (props) => {
    // const [userFirstName, userLastName, userEmail, userPW, userConfirmedPW] = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPW, setConfirmedPW] = useState("");
    const [submittedForm, setSubmittedForm] = useState(false);
    // const [firstNameMessage, setFirstNameMessage] = useState("")

    const createUser = e => {
        e.preventDefault()

        const newUser = { firstName, lastName, email, password, confirmedPW };
        console.log("NEW USER: ", newUser);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmedPW("");
        setSubmittedForm(true);
        console.log(newUser)
    }

    // first name validation
    // const firstNameValidation = (e) => {
    //     e.preventDefault()

    //     setFirstName(e.target.value);
    //     if (e.target.value.length < 1){
    //         setFirstNameMessage("Please entern a valid first name")
    //     } else if (e.target.value.length < 2) {
    //         setFirstNameMessage("First name must be 2 characters or longer!");
    //     } else {
    //         setFirstNameMessage("")
    //     }
    // }

    return (
        <div className="user-form">
        <form onSubmit={ createUser }>

        { submittedForm ?
        <h3 className="formMessage">Thank you for submitting the form!</h3> :
        <h3 className="formMessage">Welcome, please submit the completed form.</h3> }
            <div className="formInput firstName">
                <label>First Name: </label>
                <input type="text" onChange={ (e) => setFirstName(e.target.value)} value={firstName}/>
            </div>

            {firstName.length < 2 &&
            firstName.length > 0 &&
            <p style={{color: "red"}} className="inputDisclaimer">First name must be at least 2 characters.</p> }

            <div className="formInput lastName">
                <label>Last Name: </label>
                <input type="text" onChange={ (e) => setLastName(e.target.value)} value={lastName}/>
            </div>

            {lastName.length < 2 &&
            lastName.length > 0 &&
            <p style={{color: "red"}} className="inputDisclaimer">Last Name must be at least 2 characters</p>}

            <div className="formInput email">
                <label>Email: </label>
                <input type="text" onChange={ (e)=> setEmail(e.target.value)} value={email}/>
            </div>

            {email.length < 5 &&
            email.length > 0 &&
            <p style={{color: "red"}} className="inputDisclaimer">Email must be at least 2 characters</p>}

            <div className="formInput password">
                <label>Password: </label>
                <input type="text" onChange={(e)=> setPassword(e.target.value)} value={password}/>
            </div>

            {password.length < 8 &&
            password.length > 0 &&
            <p style={{color: "red"}}>Password must be at least 8 characters</p>}

            <div className="formInput confirmedPW">
                <label>Confirm Password: </label>
                <input type="text" onChange={(e)=> setConfirmedPW(e.target.value)} value={confirmedPW}/>
            </div>

            {confirmedPW.length < 8 &&
            confirmedPW.length > 0 &&
            <p style={{color: "red"}} className="inputDisclaimer passwordsMustMatch">Confirmed password must be same length as original password</p>}

            {confirmedPW === password && confirmedPW.length === password.length ?
            <p></p> :
            <p style={{color: "red"}}>Passwords MUST match!</p>}

            <div>
                <input type="submit" value="Submit Form" />
            </div>
        </form>

        </div>
     );


}

export default Form;
