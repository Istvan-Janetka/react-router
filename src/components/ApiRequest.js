import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'

const ApiRequest = () => {

    const [users, setUsers] = useState([]);

    useEffect(()=> {

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(resp => setUsers(resp.data))
    
    
    }, [])

  return (
    <div>
        {
            users.map(user => {

                return  <h3>{user.name}</h3>        
                
            })
        }
    </div>
  )
}

export default ApiRequest