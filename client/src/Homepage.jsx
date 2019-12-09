import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
    mappedApps = apps.map((app, id) => <div key={id}> Job Title: <Link to={`/app/${id}`} >  {app.name} </Link> - Company Name: {app.company} </div>)
  } else {
    mappedApps = <div> Start your job hunt! <Link to={'/AddApp'}> Add an Application </Link>  </div>
  }

  return (
    <div>
      <h1> Your jobs: </h1>
        {mappedApps}
        {/* <AppDetail /> */}
    </div>
  )
}

export default Homepage;