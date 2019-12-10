import React, { useState, useEffect } from 'react';
import { Link }  from 'react-router-dom';
import axios from 'axios';
import MappedNotes from './MappedNotes';

function AppDetail(props) {
  const [app, setApp] = useState({})
  const [notes, setNotes] = useState(null)
  const [resume, setResume] = useState(false)
  const [coverLetter, setCoverLetter] = useState(false)
  const [recruiter, setRecruiter] = useState(false)
  const [informational, setInformational] = useState(false)
  const [refetch, setRefetch] = useState(false)


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
          setResume(res.data.resume)
          setCoverLetter(res.data.coverLetter)
          setRecruiter(res.data.recruiter)
          setInformational(res.data.informational)
          if(refetch){
            setRefetch(false)
          }
        })
      }
    }, [props, refetch])

    const handleSubmit = (e) => {
      e.preventDefault()
      axios.put(`/api/apps/${props.match.params.id}`, {
        resume,
        coverLetter,
        recruiter,
        informational
      },config)
      .then(res => {
        setResume(resume)
        setCoverLetter(coverLetter)
        setRecruiter(recruiter)
        setInformational(informational)
        setRefetch(true)
      })
    }

    var displayMap;
    if(app && notes) {
        console.log(`🐳`, notes)
      displayMap = (<div>
        <p>Job Title: {app.name} — Company Name: {app.company}</p>
        <form onSubmit={handleSubmit}>
          <label>Sent Resume: <input type='checkbox' checked={resume} onClick={e => setResume(!resume)} name='resume' value={resume} /></label><br /> 
          <label>Sent Cover Letter(if required?): <input type='checkbox'  checked={coverLetter} onClick={e => setCoverLetter(!coverLetter)} name='coverLetter' value={coverLetter} /></label><br />
          <label>Contacted Recruiter: <input type='checkbox' checked={recruiter} onClick={e => setRecruiter(!recruiter)} name='recruiter' value={recruiter} /></label><br />
          <label>Informational Interview: <input type='checkbox' checked={informational}  onClick={e => setInformational(!informational)} name='informational' value={informational} /></label>
          <input type="submit" value="submit" name="submit"/>
        </form>
        <p> Notes: </p>
        <MappedNotes notes={notes} />
        <Link to={{ pathname: `/app/${app._id}/note`, token: props.location.token } }> Add Notes for Application </Link>
      </div>)
    } else if( app ) {
      console.log(`🐹`, app, notes)
      displayMap = (<div> 
        <p>Job Title: {app.name} — Company Name: {app.company}</p>
        <form onSubmit={handleSubmit}>
          <label>Sent Resume: <input type='checkbox' checked={resume} onClick={e => setResume(!resume)} name='resume' value={resume} /></label><br /> 
          <label>Sent Cover Letter(if required?): <input type='checkbox'  checked={coverLetter} onClick={e => setCoverLetter(!coverLetter)} name='coverLetter' value={coverLetter} /></label><br />
          <label>Contacted Recruiter: <input type='checkbox' checked={recruiter} onClick={e => setRecruiter(!recruiter)} name='recruiter' value={recruiter} /></label><br />
          <label>Informational Interview: <input type='checkbox' checked={informational}  onClick={e => setInformational(!informational)} name='informational' value={informational} /></label>
          <input type="submit" value="submit" name="submit"/>
        </form>
        <p> <Link to={{ pathname: `/app/${app._id}/note`, token: props.location.token } }> Add Notes for Application </Link> </p>
        </div>)
    }

  return (
    <>
      {displayMap}
    </>
  )
}

export default AppDetail;