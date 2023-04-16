import './LoginPage.css'
import {Link} from 'react-router-dom';
import React, {useState, useRef} from 'react';

function LoginPage(props) {
    /*//saving entered data
    const [user, setUser] = useState({
        user: '',
        pass: '',
    });*/

    // setting entered username and password as state
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const u = useRef();
    const p = useRef();

    // sets username
    const addUsername = (e) => {
        setUsername(e.target.value);
    }

    // sets password
    const addPassword = (e) => {
        setPassword(e.target.value);
    }

    // boolean if entered correct credentrials as state
    const [validCred, setValidCred] = useState(false);

    const onSubmit = () => {
        setValidCred(() => { // checks if entered username and password are in DUMMYUSERS
            if (props.users.some(item => item.user === u.current.value && item.pass === p.current.value)) {
                return true;            
            }
            return false;
        })
    }

    const onClear = () => {
        u.current.value = "";
        p.current.value = "";
    }

    return (
        <div className='form'>
            <h2 id='loginHeader'>Login</h2>

            <form className='login-form'>
                <label >Username</label> <br/>
                <input ref={u} type="text" id="user" onChange={addUsername}></input> <br/>

                <label >Password</label> <br/>
                <input ref={p} type="text" id="pass" onChange={addPassword}></input> <br/>
            </form>

            {/*ERROR: currently button requires two clicks to go back to home if creds correct */}
            <Link to={'/'}> {/* if valid creds cahnges link back to home page, otherwise stays on login page*/}
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