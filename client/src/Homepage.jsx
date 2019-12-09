import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Homepage(props) {
  const [newApps, setNewApps] = useState([])
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
      axios.get('/api/app', config)
        .then((res) => {
            setNewApps(res.data)
        })
      console.log(`🐷`,config)
    }, [props]);

  


  var mappedApps;
  if(newApps.length){
    mappedApps = newApps.map((newApp, id) => <div className='Jobs' key={id}> Job Title: <Link to={`/app/${id}`} >  <strong>{newApp.name}</strong> </Link><br />  Company Name: <i>{newApp.company}</i><br />
  <label>Sent Resume: <input type='checkbox' onClick={e => setResume(!resume)} name='resume' value={newApp.resume} /></label><br /> 
  <label>Sent Cover Letter(if required?): <input type='checkbox'  onClick={e => setCoverLetter(!coverLetter)} name='coverLetter' value={newApp.coverLetter} /></label><br />
  <label>Contacted Recruiter: <input type='checkbox' onClick={e => setRecruiter(!recruiter)} name='recruiter' value={newApp.recruiter} /></label><br />
  <label>Informational Interview: <input type='checkbox' onClick={e => setInformational(!informational)} name='informational' value={newApp.informational} /></label>

  </div>)
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