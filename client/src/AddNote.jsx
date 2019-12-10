import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

function AddNote(props) {
  const [rec_convo, setRec_Convo] = useState('')
  const [info_convo, setInfo_Convo] = useState('')
  const [comments, setComments] = useState('')
  const [redirect, setRedirect] = useState(false)


  let config = {
    headers: {
      Authorization: `Bearer ${props.location.token}`
    }
  };

  console.log(props.location)
  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/apps/${props.match.params.id}/note`, {
      rec_convo: rec_convo,
      info_convo: info_convo,
      comments: comments
    }, config)
      .then(res => {
        setRec_Convo('')
        setInfo_Convo('')
        setComments('')
        setRedirect(true)
      })
  }
    
  // if (redirect) { return <Redirect to={`/app/${props.match.params.id}`} /> }
  if (redirect) { return <Redirect to={`/profile`} /> }
  return (
    <>
      <h1>
        Add Notes for your Application
      </h1>
      <div>
        <form onSubmit={handleSubmit}>
          Coversation with Recruiter Notes: <input type="text" value={rec_convo} onChange={(e) => setRec_Convo(e.target.value)} name="rec_convo" /> <br />
          Informational Interview Notes: <input type="text" name="info_convo" value={info_convo} onChange={(e) => setInfo_Convo(e.target.value)}/> <br />
          General Notes: <input type="text" name="comments" value={comments} onChange={(e) => setComments(e.target.value)}/> <br />
          <input type="submit" value="submit" name="submit" />
        </form>
      </div>
    </>
  )
}

export default AddNote