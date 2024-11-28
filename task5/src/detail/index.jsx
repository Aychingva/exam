import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Detail() {

    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response=>setUser(response.data))
        .catch(error => console.error('Error fetching user:', error))
    },[id])
    
    if (!user) {
      return <p>Loading...</p>; // Ensure user is fetched before rendering details
    }
  return (
    <div>
         
      <h1>User Details</h1>
      <p>Name:{user.name}</p>
      <p>Username:{user.username}</p>
      <p>Email:{user.email}</p>
      <p>Company:{user.company.name}</p>
    
    </div>
  )
}

export default Detail