import React, {useState} from 'react';
import axios from 'axios';

function AddApp(props) {
const [name, setName] = useState('')
const [company, setCompany] = useState('')
const [resume, setResume] = useState(false)
const [coverLetter, setCoverLetter] = useState(false)
const [recruiter, setRecruiter] = useState(false)
const [informational, setInformational] = useState(false)
const [offer, setOffer] = useState([])
const [note, setNote] = useState([])
const [submit, setSubmit] = useState()

  let config = {
    headers: {
      Authorization: `Bearer ${props.token}`
    }
  };



  return (
    <div>
        <h1>Start your Application: </h1>
        <div className="form-id">
          <form action="POST">
            Job Title: <input value={name} onChange={e => setName(e.target.value)} type="text" name="title" /> <br />
            Company Name: <input value={company} onChange={e => setCompany(e.target.value)} type="text" name="company" /> <br />
            <input value={resume} onChange={e => setResume(e.target.resume)} type="hidden" name="resume"/>
            <input value={coverLetter} onChange  type="hidden" name="coverLetter"/>
            <input type="hidden" name="recruiter"/>
            <input type="hidden" name="informational"/>
            <input type="hidden" name="offer"/>
            <input type="hidden" name="note"/>
            <input type="submit" name="submit"/>
          </form>
        </div>
    </div>
  )
}

export default AddApp;