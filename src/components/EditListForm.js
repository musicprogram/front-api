import React, {useState} from 'react';

function EditListForm(props) {

  const [id, setId] = useState(props.list.id);
  const [title, setTitle] = useState(props.list.title);
  const [excerpt, setExcerpt] = useState(props.list.excerpt);

  const handleSubmit = (e)=>{
    e.preventDefault();
    props.editList(id, title, excerpt);
  };

  const handleChangeTitle = (e) =>{
    const title = e.target.value;
    setTitle(title);
  };

  const handleChangeExcerpt = (e) =>{
    const excerpt = e.target.value;
    setExcerpt(excerpt);
  };

  return (
     <div className="card mb-2">
        <div className="card-header">
          <h5 className="font-weight-bold">{id}</h5>
        </div>
        <div className="card-body bg-light">
          <input
            name="title"
            type="text"
            placeholder="Title..."
            value={title}
            className="form-control mb-2"
            onChange={handleChangeTitle} />
          <input
            name="excerpt"
            type="text"
            placeholder="Excerpt..."
            value={excerpt}
            className="form-control"
            onChange={handleChangeExcerpt} />
          <button
            className="btn btn-outline-success mt-2"
            onClick={handleSubmit}>Update List</button>
        </div>
      </div>
  );
}

export default EditListForm;
