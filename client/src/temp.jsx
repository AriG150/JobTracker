import React, { useState, useEffect } from 'react';
import { BrowserRouter as Link } from 'react-router-dom';
import axios from 'axios';

function Homepage(props) {
  const [apps, setApps] = useState([])


  let config = {
    headers: {
      Authorization: `Bearer ${props.token}`
    }
  };
  useEffect(() => {
      axios.get('/api/app', config)
        .then((res) => {
            setApps(res.data)
        })
      console.log(`🐷`,config)
    }, [props]);

    
  var mappedApps;
  if(apps.length){
    mappedApps = apps.map((app, id) => <div key={id}> Job Title: {app.name} - Company Name: {app.company} </div>)
  } else {
    mappedApps = <div> Start your job hunt! <a href="/AddApp"> Add an Application </a>  </div>
  }

  return (
    <div>
      <h1> Your jobs: </h1>
        {mappedApps}
    </div>
  )
}

export default Homepage;