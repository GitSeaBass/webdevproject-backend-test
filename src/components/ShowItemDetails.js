import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';

function ShowItemDetails(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item, setitem] = useState({});

    const addItem = () => {
        setitem(() => {
            return props.items.find(item => item.id === id);
        })
    }

    useEffect(() => {
        addItem();
    });

    const onDelete = () => {
        props.deleteItem(id);
        navigate('/');
    }

    const onUpdate = () => {
        props.deleteItem(id);
        navigate(`/update-item/${id}`);
    }

    return (      
        <>
            {/* If want to include image*/}
            {/*}<img src={item.image} alt={item.description}/>{*/}
            <div>Title</div>
            <div>{item.title}</div>

            <div>Date Published</div>
            <div>{String(item.date)}</div>

            <div>Image URL</div>
            <div>{item.image}</div>

            <div>Description</div>
            <div>{item.description}</div>

            <button onClick={onDelete}>Delete </button>
            <button onClick={onUpdate}>Update Item</button>
        </>
    );
}

export default ShowItemDetails;