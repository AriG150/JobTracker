import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homepage(props) {
  const [apps, setApps] = useState([])
  const [resume, setResume] = useState(false)
  const [coverLetter, setCoverLetter] = useState(false)
  const [recruiter, setRecruiter] = useState(false)
  const [informational, setInformational] = useState(false)

  let config = {
    headers: {
      Authorization: `Bearer ${props.token}`
    }
  };
  useEffect(() => {
    if (props.token) {
      axios.get('/api/apps', config)
        .then((res) => {
          setApps(res.data)
        })
      console.log(`🐷`,config)
    }
  }, [props]);
    
  var mappedApps;
  if(apps.length){
    mappedApps = apps.map((app, id) => <div key={id}> Job Title: <Link to={{ pathname: `/app/${app._id}`, token: props.token }} >  {app.name} </Link> - Company Name: {app.company} </div>)
  } else {
    mappedApps = <div> 
      <p> You haven't started any applications. </p>
      <p> Start your job hunt!  </p>
      <p> <Link to={'/AddApp'}> Add an Application </Link>   </p> 
      
      </div>
  }

  return (
    <div>
      <h1> Your jobs: </h1>
        {mappedApps}
    </div>
  )
}

export default Homepage;