import React from 'react'
import {useNavigate, useParams} from 'react-router-dom'

const Profile = () => {

    let navigate = useNavigate();
    let { username } = useParams();

  return (
    <>
         {(username) ? (<h1>Üdvözöllek az oldalon, {username}! 🖐</h1>): (<h1>Üdvözöllek az oldalon!</h1>)}


        <button onClick={()=> navigate("/")}>Vissza a kezdőoldalra</button>
    </>
  )
}

export default Profile