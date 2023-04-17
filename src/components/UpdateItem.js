import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateItem(props) {
    const navigate = useNavigate();
    const {id} = useParams();

    const data = props.items.find(item => item.id === id);

    const [updatedItem, setUpdatedItem] = useState(data);
    const addUpdatedItem = (e) => {
        setUpdatedItem({...updatedItem, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        props.updateItem(id, updatedItem);
        navigate('/');
    } 
    
    return (
        <form onSubmit={onSubmit}>
            <label>New Title</label>
            <input type="text" name="title" onChange={addUpdatedItem}></input>

            <label>New Description</label>
            <input type="text" name="description" onChange={addUpdatedItem}></input>

            <input type="submit"></input>
        </form>
    );
}

export default UpdateItem;