import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateItem.css';
import axios from "axios";

function CreateItem(props) {
    const navigate = useNavigate();

    const [newItem, setNewItem] = useState({
        title: '',
        description: '',
        image: '',
        user: props.currentUser,
    });

    const addNewItem = (e) => {
        setNewItem({...newItem, [e.target.id]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault(); // prevent default reload

        axios
            .post(`http://localhost:8082/api/items`, newItem)
            .then((res) => {
                navigate('/');
            })
            .catch((err) => {
                console.log(`Error in CreateItem`);
            })
    }

    return (
        <form className="form" onSubmit={onSubmit}>
            <label>Enter title: </label>
            <input type="text" id="title" onChange={addNewItem} required></input>

            <label>Enter description: </label>
            <input type="text" id="description" onChange={addNewItem} required></input>

            <label>Enter image URL: </label>
            <input type="text" autoComplete="off" id="image" onChange={addNewItem} required></input>

            
            <input type="submit"></input>
        </form>
    );
}

export default CreateItem;