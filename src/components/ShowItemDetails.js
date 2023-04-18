import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './ShowItemDetails.css'


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
        navigate(`/update-item/${id}`);
    }

    return (      
        <>
        <div className='details'>
            {/* If want to include image*/}
            <img className='image' src={item.image} alt={item.description}/>
            <div>Title:</div>
            <div>{item.title}</div>
            <br></br>

            <div>Description:</div>
            <div>{item.description}</div>
            <br></br>

            <div>Date Published:</div>
            <div>{String(item.date)}</div>
            <br></br>


            <div>Image URL:</div>
            <div>{item.image}</div>
            <br></br>

            <button className='delete' onClick={onDelete}>Delete </button>
            <button className='update' onClick={onUpdate}>Update Item</button>
            </div>
        </>
    );
}

export default ShowItemDetails;