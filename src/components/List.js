import React from 'react';


function List(props) {

  return (

    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{props.list.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{props.list.title}</h6>
        <p className="card-text">{props.list.excerpt}</p>
        <button
          onClick={()=> props.editingList(props.list.id) }
          className="btn btn-outline-warning mr-2"
        >Edit</button>
        <button
          onClick={()=> props.onRemoveList(props.list.id) }
          className="btn btn-outline-danger"
        >Erase</button>
      </div>
    </div>

  );
}

export default List;
