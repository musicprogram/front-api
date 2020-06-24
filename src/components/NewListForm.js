import React,{useRef} from 'react';


function NewListForm({onNewList = f => f}) {
  const refTitle = useRef(null);
  const refExcerpt = useRef(null);

  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(refTitle.current.value);
    console.log(refExcerpt.current.value);
    onNewList(refTitle.current.value, refExcerpt.current.value)
    refTitle.current.value = '';
    refExcerpt.current.value = '';
  }

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title</label>
            <input
              type="text"
              className="form-control"
              ref={refTitle}
              placeholder="Title..."
            />
          </div>

          <div className="mb-3">
            <label htmlFor="excerpt" className="form-label">Excerpt</label>
            <input
              type="text"
              className="form-control"
              ref={refExcerpt}
              placeholder="Excerpt..."
            />
          </div>

          <button type="submit" className="btn btn-outline-dark btn-lg btn-block">Add List</button>
        </form>
      </div>
    </div>

  );
}

export default NewListForm;
