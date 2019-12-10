import React from 'react';


function MappedNotes(props) {

  const mappedNotes = props.notes.map((note, id) => (
    <div key={id}> 
    <hr />
    <p> Notes from Recruiter Conversation: <span>{note.rec_convo}</span> </p>
    <p> Notes from Informational Interview: <span>{note.info_convo}</span>  </p>
    <p>General Notes: <span>{note.comments}</span> </p>
    </div>
  ))
  

  return(
    <>
    {mappedNotes}
    </>
  )
}
export default MappedNotes;