import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UpdateItem(props) {
    const navigate = useNavigate();
    const {id} = useParams();

    const [updatedItem, setUpdatedItem] = useState({
        title: '',
        description: '',
        image: '',
    });
    const addUpdatedItem = (e) => {
        setUpdatedItem({...updatedItem, [e.target.name]: e.target.value});
    }

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/items/${id}`)
            .then((res) => {
                setUpdatedItem({
                    title: res.data.title,
                    description: res.data.description,
                    image: res.data.image,
                });
            })
            .catch((err) => {
                console.log('Error from UpdateItem');
            })
    }, [id]);

    const onSubmit = (e) => {
        e.preventDefault();

        const data = {
            title: updatedItem.title,
            description: updatedItem.description,
            image: updatedItem.image,
        }

        axios
            .put(`http://localhost:8082/api/items/${id}`, updatedItem)
            .then((res) => {
                navigate(`/show-item/${id}`);
            })
            .catch((err) => {
                console.log(data);
            });
    };

    return (
        <form className = 'form' onSubmit={onSubmit}>
            <label>New Title</label>
            <input type="text" name="title" onChange={addUpdatedItem}></input>

            <label>New Description</label>
            <input type="text" name="description" onChange={addUpdatedItem}></input>

            <label>New Image</label>
            <input type="text" name="image" onChange={addUpdatedItem}></input>

            <input type="submit"></input>
        </form>
    );
}

export default UpdateItem;