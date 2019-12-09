import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AppDetail(props) {
  const [app, setApp] = useState({})
  const [notes, setNotes] = useState(null)
  const [resume, setResume] = useState()
  const [coverLetter, setCoverLetter] = useState()
  const [recruiter, setRecruiter] = useState()
  const [informational, setInformational] = useState()

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
    
    
    useEffect(() => {
      if (props.match.params.id && props.loction.token) {
        axios.put(`/api/apps/${props.match.params.id}`, config)
          .then((res) => {
            setResume(!resume)
            setCoverLetter(!coverLetter)
            setRecruiter(!recruiter)
            setInformational(!informational)
          })
      }
    })
    
    
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
      </div>)
    } else{
      displayMap = <div> You don't have any applications </div>
    }


  return (
    <>
      {displayMap}
    </>
  )
}


export default AppDetail;