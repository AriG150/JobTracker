import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ApplicationsList from './ApplicationsList';
import axios from 'axios';


function Homepage(props) {
  const [apps, setApps] = useState([])

  useEffect(() => {
    axios.get('/api/app')
      .then((res) => {
        setApps(res.data)
      })
  })

  var mappedApps;
  if(props.apps.length)

  return (
    <>
      <h1> Your jobs: </h1>
    </>
  )
}

export default Homepage;