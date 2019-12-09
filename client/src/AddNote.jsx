import React, {useState} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

function AddNote(props) {
  const [rec_convo, setRec_Convo] = useState('')
  const [info_convo, setInfo_Convo] = useState('')
  const [general, setGeneral] = useState('')
  const [redirect, setRedirect] = useState('')


  let config = {
    headers: {
      Authorization: `Bearer ${props.location.token}`
    }
  };

  console.log(`🐤`, props)

    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/app/${props.match.params.id}/note`, {
      rec_convo: rec_convo,
      info_convo: info_convo,
      general: general
    }, config)
      .then(res => {
        setRec_Convo('')
        setInfo_Convo('')
        setGeneral('')
        setRedirect(<Redirect to={`/api/app/${props.match.params.id}`} />) 
      })
  }

  return (
    <>
      <h1>
        Add Notes for your Application
      </h1>
      <div>
        <form action="POST" onSubmit={handleSubmit}>
          Coversation with Recruiter Notes: <input type="text" value={rec_convo} onChange={(e) => setRec_Convo(e.target.value)} name="rec_convo" /> <br />
          Informational Interview Notes: <input type="text" name="info_convo" value={info_convo} onChange={(e) => setInfo_Convo(e.target.value)}/> <br />
          General Notes: <input type="text" name="general" value={general} onChange={(e) => setGeneral(e.target.value)}/> <br />
          <input type="submit" value="submit" name="submit" />
        </form>
      </div>
    </>
  )
}

export default AddNote