import React from 'react';


function MappedNotes(props) {

  const mappedNotes = props.notes.map((note, id) => (
      console.log(`🐡`,note),
    <div key={id}> 
    <hr />
      <p>{note.rec_convo}</p>
      <p>{note.info_convo}</p>
      <p>{note.comments}</p>
    </div>
  ))
  

  return(
    <>
    {mappedNotes}
    </>
  )
}
export default MappedNotes;