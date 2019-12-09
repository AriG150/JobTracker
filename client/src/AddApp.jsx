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

  let config = {
    headers: {
      Authorization: `Bearer ${props.token}`
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/apps', {
      name: name,
      company: company,
      resume: resume,
      coverLetter: coverLetter,
      recruiter: recruiter,
      offer: offer,
      note: note
    }, config)
      .then(res => {
        setName('')
        setCompany('')
        setResume(false)
        setCoverLetter(false)
        setRecruiter(false)
        setInformational(false)
        setOffer([])
        setNote([])
      })
  }

  return (
    <div>
        <h1>Start your Application: </h1>
        <div className="form-id">
          <form action="POST" onSubmit={handleSubmit} >
            Job Title: <input value={name} onChange={e => setName(e.target.value)} type="text" name="title" /> <br />
            Company Name: <input value={company} onChange={e => setCompany(e.target.value)} type="text" name="company" /> <br />
            <input value={resume} onChange={e => setResume(e.target.resume)} type="hidden" name="resume"/>
            <input value={coverLetter} onChange={e => setCoverLetter(e.target.coverLetter)}  type="hidden" name="coverLetter"/>
            <input value={recruiter}  onChange={e => setRecruiter(e.target.recruiter)} type="hidden" name="recruiter"/>
            <input value={informational} onChange={e => setInformational(e.target.informational)}  type="hidden" name="informational"/>
            <input value={offer} onChange={e => setOffer(e.target.offer)}  type="hidden" name="offer"/>
            <input value={note} onChange={e => setNote(e.target.note)}  type="hidden" name="note"/>
            <input   type="submit" name="submit"/>
          </form>
        </div>
    </div>
  )
}

export default AddApp;