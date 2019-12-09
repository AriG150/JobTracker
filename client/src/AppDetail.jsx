import React, {useState, useEffect} from 'react';
import axios from 'axios';

function AppDetail(props) {
  const [app, setApp] = useState({})
  const [notes, setNotes] = useState(null)

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