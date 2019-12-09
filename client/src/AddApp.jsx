import React from 'react';

function AddApp() {
  


  return (
    <div>
        <h1>Start your Application: </h1>
        <div className="form-id">
          <form action="POST">
            Job Title: <input type="text" name="title" /> <br />
            Company Name: <input type="text" name="company" /> <br />
            <input type="hidden" name="resume"/>
            <input type="hidden" name="coverLetter"/>
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