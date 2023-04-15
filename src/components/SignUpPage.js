import './SignUpPage.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function SignUpPage(props) {
    // setting the new username and password as state
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    // updating new username
    const addNewUsername = (e) => {
        setNewUsername(e.target.value);
    }

    // updating new password
    const addNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    
    let newUser;
    // creates a new user object
    function createNewUser(){
        newUser = {
            user: newUsername,
            pass: newPassword,
        }
        return newUser;
    }

    const onSubmit = () => {
        createNewUser(); // creates new user object
        props.addUsers(newUser); // adds new user to DUMMYUSERS
        
        // for testing
        console.log(newUser);
        console.log(props.users);
    }

    return (
        <div className='form'>
            <h2 id='signupHeader'>Create Account</h2>
            <form className='signup-form'>
                <label >Create Username</label> <br/>
                <input type="text" id="name" onChange={addNewUsername}></input> <br/>
                <label >Create Password</label> <br/>
                <input type="text" id="pass" onChange={addNewPassword}></input> <br/>
            </form>
            {/* Error: same error requiring two clicks*/}
            <Link to='/login'>
                    <button onClick={onSubmit} id='signupButton' className='button'>Sign Up</button>
            </Link>
        </div>
    );
}

export default SignUpPage;