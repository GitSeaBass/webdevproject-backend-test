import './SignUpPage.css';
import {Link} from 'react-router-dom';
import { useState } from 'react';

function SignUpPage(props) {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const addNewUsername = (e) => {
        setNewUsername(e.target.value);
    }

    const addNewPassword = (e) => {
        setNewPassword(e.target.value);
    }
    
    let newUser;
    function createNewUser(){
        newUser = {
            user: newUsername,
            pass: newPassword,
        }
        return newUser;
    }

    const onSubmit = () => {
        createNewUser();
        props.addUsers(newUser);
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
            <Link to='/login'>
                    <button onClick={onSubmit} id='signupButton' className='button'>Sign Up</button>
            </Link>
        </div>
    );
}

export default SignUpPage;