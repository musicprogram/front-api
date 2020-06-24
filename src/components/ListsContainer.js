import React,{useState,useEffect} from 'react';

import axios from 'axios';

import List from "./List";
import NewListForm from "./NewListForm";
import EditListForm from './EditListForm'

function ListContainer() {

  const [lists,setLists] = useState([]);
  const [editingListId, setEditingListId] = useState(null);

  useEffect(()=>{
    axios.get('http://localhost:3001/api/v1/lists.json')
      .then(response => {
        //console.log(response.data);
        setLists(response.data);
      })
      .catch(error => console.log(error))
  },[])

  const addNewList = (title,excerpt)=>{
    let list = {
      title,
      excerpt
    }
    axios.post( '/api/v1/lists', { list })
      .then(response => {
        console.log(response)
        const listsNew = [...lists, response.data ]
        setLists(listsNew);
      })
      .catch(error => {
        console.log(error)
      })
  };

  const removeList = (id)=>{
    const sure = window.confirm('are you sure to delete this element?');
    if(sure){
      axios.delete( '/api/v1/lists/' + id )
        .then(response => {
          const listsNew = lists.filter(
            list => list.id !== id
          )
          setLists(listsNew)
        })
        .catch(error => console.log(error))
    }
  };


  const editingList = (id)=>{
    setEditingListId(id);
  };

  const editList = (id, title, excerpt)=>{
    axios.put( '/api/v1/lists/' + id, {
      list: {
        title,
        excerpt
      }
    })
      .then(response => {
        console.log(response);
        const listsUpdate = lists;
        listsUpdate.map((list)=>{
          if(response.data.id === list.id){
            list.title = response.data.title;
            list.excerpt = response.data.excerpt;
          }
        })
        setLists(listsUpdate)
        setEditingListId(null)
      })
      .catch(error => console.log(error));
  }

  return (
    <div className="lists-container container-fluid">
      <hr/>
      <div className="row">
        <div className="col-sm-8">
          <div className="card">
            <div className="card-body">

                {lists.map((list)=>{
                  if ( editingListId === list.id ) {
                    return (<EditListForm
                      list={list}
                      key={list.id}
                      editList={editList}
                    />)
                  } else {
                    return (<List
                      list={list}
                      key={list.id}
                      onRemoveList={removeList}
                      editingList={editingList}
                    />)
                  }
                })
                }

            </div>
          </div>

        </div>
        <div className="col-sm-4">
          <NewListForm onNewList={addNewList}/>
        </div>
      </div>


    </div>
  );
}

export default ListContainer;
