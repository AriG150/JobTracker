import React, { useState, useEffect } from 'react';
import { Link}  from 'react-router-dom';
import axios from 'axios';

function AppDetail(props) {
  const [app, setApp] = useState({})
  const [notes, setNotes] = useState(null)
  const [resume, setResume] = useState(false)
  const [coverLetter, setCoverLetter] = useState(false)
  const [recruiter, setRecruiter] = useState(false)
  const [informational, setInformational] = useState(false)

  let config = {
    headers: {
      Authorization: `Bearer ${props.location.token}`
    }
  };

  useEffect(() => {
    if (props.match.params.id && props.location.token) {
      axios.get(`/api/apps/${props.match.params.id}`, config)
        .then((res) => {
          setApp(res.data)
          setNotes(res.data.notes)
        })
      }
    }, [props])
    
    var displayMap;
    if(app && notes) {
      console.log(`🦊`, app)
      console.log(`🐞`, notes)
      //Map over array to show the 3 notes 
      displayMap = (<div>
        <p>Job Title: {app.name} — Company Name: {app.company}</p>
        <label>Sent Resume: <input type='checkbox' onClick={e => setResume(!resume)} name='resume' value={app.resume} /></label><br /> 
        <label>Sent Cover Letter(if required?): <input type='checkbox'  onClick={e => setCoverLetter(!coverLetter)} name='coverLetter' value={app.coverLetter} /></label><br />
        <label>Contacted Recruiter: <input type='checkbox' onClick={e => setRecruiter(!recruiter)} name='recruiter' value={app.recruiter} /></label><br />
        <label>Informational Interview: <input type='checkbox' onClick={e => setInformational(!informational)} name='informational' value={app.informational} /></label>
        <p>Recruiter Conversation Notes: {notes[0].rec_convo}</p>
        <p>Informational Conversation Notes: {notes[0].info_convo}</p>
        <p>General Notes: {notes[0].comments}</p>


        <Link to={{ pathname: `/app/${app._id}/note`, token: props.token } }> Add Notes for Application </Link>
      </div>)
    } else{
      displayMap = (<div> 
        <p> You don't have any applications </p>
        </div>)
    }


  return (
    <>
      {displayMap}
    </>
  )
}


export default AppDetail;