import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
import './styles/AddNote.css'


const AddNote = (props) => {
    
  const context = useContext(noteContext);
  const {addNote } = context;

  const [note, setNote] = useState({title: "", description: "", tag: ""});

  const handleClick = (e)=>{
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    setNote({title: "", description: "", tag: ""});
    props.showAlert("Note Added Successfully", "success");
  }

  const onChange = (e)=>{
    setNote({...note, [e.target.name]: e.target.value})
  }
    
  return (
    <div>
      <div className="container my-3 my-add-note">

        <div className="add-note-card">

          <h2>Add a Note</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                name="title"
                value={note.title}
                aria-describedby="emailHelp"
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="form-label">
                Description
              </label>
              <input
                type="text"
                className="form-control"
                id="description"
                name="description"
                value={note.description}
                onChange={onChange}
                minLength={5}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">
                Tag
              </label>
              <input
                type="text"
                className="form-control"
                id="tag"
                name="tag"
                value={note.tag}
                onChange={onChange}
              />
            </div>
            {/* <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                Check me out
              </label>
            </div> */}
            <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick} >
              Add note
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default AddNote;
