import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButon from '../components/BackButon';
import Spinner from '../components/Spinner';


const ShowBook = () => {
    const [book, setBook] =useState({});
    const [loading, setLoading] = useState(false);
    const { id } = useParams();
    useEffect(() =>{
        setLoading(true);
        axios.get(`http://localhost:5000/books/${id}`)

    }, [])

    
  return (
    <div>ShowBook</div>
  )
}

export default ShowBook