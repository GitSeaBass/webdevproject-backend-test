import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateItem(props) {
    const navigate = useNavigate();
    const {id} = useParams();

    const [newTitle, setnewTitle] = useState('');

    const data = props.items.find(item => item.id === id);

    const [updatedItem, setUpdatedItem] = useState(data);
    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(updatedItem);
    } 
    
    return (
        <form onSubmit={onSubmit}>
            <label>New Title</label>
            <input type="text" name="title" ></input>

            <label>New Description</label>
            <input type="text" name="description"></input>

            <input type="submit"></input>
        </form>
    );
}

export default UpdateItem;