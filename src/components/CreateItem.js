import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function CreateItem(props) {
    const navigate = useNavigate();

    const [enteredInfo, setEnteredInfo] = useState({
        id: createId(), 
        title: '',
        description: '',
        image: '',
        date: new Date(),
        user: props.currentUser,
        comments: [
            
        ],
        likes: [
            
        ],
    });
    
    // update enteredInfo object
    const addEnteredInfo = (e) => {
        setEnteredInfo({...enteredInfo, [e.target.id]: e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault(); // prevent default reload
        console.log(enteredInfo);
        props.addItemHandler(enteredInfo);

        navigate('/');
    }

    function createId() {
        let x = Math.ceil(Math.random() * 100);
        let id = 'i' + String(x);
        return id;
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Enter title: </label>
            <input type="text" id="title" onChange={addEnteredInfo} required></input>

            <label>Enter description: </label>
            <input type="text" id="description" onChange={addEnteredInfo} required></input>

            <label>Enter image URL: </label>
            <input type="text" autoComplete="off" id="image" onChange={addEnteredInfo} required></input>

            
            <input type="submit"></input>
        </form>
    );
}

export default CreateItem;