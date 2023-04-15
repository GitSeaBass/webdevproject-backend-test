import './LoginPage.css'
import {Link} from 'react-router-dom';
import React, {useState} from 'react';

function LoginPage(props) {
    /*//saving entered data
    const [user, setUser] = useState({
        user: '',
        pass: '',
    });*/

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const addUsername = (e) => {
        setUsername(e.target.value);
    }

    const addPassword = (e) => {
        setPassword(e.target.value);
    }

    const [validCred, setValidCred] = useState(false);
    const onSubmit = () => {
        setValidCred(() => {
            if (props.users.some(item => item.user === username && item.pass === password)) {
                return true;            
            }
            return false;
        })
    }

    return (
        <div className='form'>
            <h2 id='loginHeader'>Login</h2>

            <form className='login-form'>
                <label >Username</label> <br/>
                <input type="text" id="user" onChange={addUsername}></input> <br/>

                <label >Password</label> <br/>
                <input type="text" id="pass" onChange={addPassword}></input> <br/>
            </form>

            <Link to={validCred ? '/':'.'}>
                    <button onClick={() => {
                        onSubmit();
                        props.onLoggedIn(true);
                        props.addCurrentUser(username);
                    }} id='loginButton' className='button'>LOGIN</button>
            </Link>
        </div>
    );
}

export default LoginPage;