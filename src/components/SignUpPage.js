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
    
    const onSubmit = () => {
        props.onLoggedIn(true);
    }

    return (
        <div className='SignupPage'>
            <h2 id='SignupHeader'>Create Account</h2>
            <form className='signup-form'>
                <label >Create Username</label> <br/>
                <input type="text" id="name"></input> <br/>
                <label >Create Password</label> <br/>
                <input type="text" id="pass"></input> <br/>
            </form>
            <Link to='/login'>
                    <button onClick={props.onLoggedIn} id='signupButton' className='button'>Sign Up</button>
            </Link>
        </div>
    );
}

export default SignUpPage;