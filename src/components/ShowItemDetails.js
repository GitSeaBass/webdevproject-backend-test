import { useState, useEffect } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import './ShowItemDetails.css'
import axios from 'axios';


function ShowItemDetails(props) {
    const {id} = useParams();
    const navigate = useNavigate();
    const [item, setitem] = useState({});

    useEffect(() => {
        axios
            .get(`http://localhost:8082/api/items/${id}`)
            .then((res) => {
                setitem(res.data);
            })
            .catch(() => {
                console.log('Error from ShowItemDetails');
            });
    }, [id]);

    const onDelete = () => {
        axios
            .delete(`http://localhost:8082/api/items/${id}`)
            .then((res) => {
                navigate('/');
            })
            .catch(() => {
                console.log('Error from ShowItemDetails');
            })
    }

    const onUpdate = () => {
        navigate(`/update-item/${id}`);
    }

    function home() {
        navigate('/');
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

            {/* temporary return home button */}    
            <button className='button' onClick={home}>Home</button>
            </div>
        </>
    );
}

export default ShowItemDetails;