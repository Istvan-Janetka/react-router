import React from 'react'
import ApiRequest from '../components/ApiRequest'

const About = ({text}) => {
  return (
    <div>
        <h1>Posztok megjelenítése</h1>
        <ApiRequest />
    </div>
  )
}

export default About