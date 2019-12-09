import React, {useState} from 'react';
import axios from 'axios';

function AddNote(props) {
  const [rec_convo, setRec_Convo] = useState('')
  const [info_convo, setInfo_Convo] = useState('')
  const [general, setGeneral] = useState('')


  let config = {
    headers: {
      Authorization: `Bearer ${props.token}`
    }
  };

  //change to component={} like with AppDetail on App.jsx. Add link in in AppDetail to 'add a note' that links to this page so you get
  // props. This way we can make the correct axios call. 
    const handleSubmit = (e) => {
    e.preventDefault()
    axios.post(`/api/app/id/note`, {

    }, config)
  }

  return (
    <>
      <h1>
        Add Notes for your Application
      </h1>
      <div>
        <form action="POST">
          Coversation with Recruiter Notes: <input type="text" value={rec_convo} onChange={(e) => setRec_Convo(e.target.value)} name="rec_convo"  /> <br />
          Informational Interview Notes: <input type="text" name="info_convo" value={info_convo} onChange={(e) => setInfo_Convo(e.target.value)}/> <br />
          General Notes: <input type="text" name="general" value={general} onChange={(e) => setGeneral(e.target.value)}/>
          <input type="submit" value="submit" name="submit" />
        </form>
      </div>
    </>
  )
}

export default AddNote