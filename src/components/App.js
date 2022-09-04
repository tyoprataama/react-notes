import React from 'react';
import ListNotes from './ListNotes';
import { getInitialData, showFormattedDate } from'../utils/index';
import InputNotes from './InputNotes';
import EmptyMsg from './EmptyMsg';
import SearchBar from './SearchBar';


class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:getInitialData(),
            search:'',
            date:showFormattedDate(new Date()),
        }

        this.onSearchBarHandler = this.onSearchBarHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchivedEventHandler = this.onArchivedEventHandler.bind(this);
        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
    }

    onDeleteHandler(id){
        const notes = this.state.notes.filter(note=> 
            note.id !== id);
            this.setState({notes});
    }

    onArchivedEventHandler(id){
        const notes = this.state.notes.map((note)=>
        note.id === id ? {...note, archived : !note.archived } : note)
        this.setState({notes});
    }

    onAddNotesHandler({title, body}){
        this.setState((prevState) =>{
            return{
                notes:[
                    ...prevState.notes,
                    {
                        id:+new Date(),
                        title, 
                        body,
                        archived: false,
                        createdAt: this.state.date,
                    }
                ],
            }
        })
    }

    onSearchBarHandler(event) {
        this.setState(() => {
          return {
            search : event.target.value
          }
        })
      }
    
    render(){
    
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const NotesNonActive = notes.filter((note)=>{
            return note.archived === false
        });
        const NotesActive = notes.filter((note)=>{
            return note.archived === true
        }); 

        return(
           
            <div>
                <SearchBar search={this.state.search} onSearch={this.onSearchBarHandler} />
    
                <div className="note-app__body">
                    <InputNotes addNotes = {this.onAddNotesHandler}/>
                    <h2>Catatan Aktif</h2>
                    {NotesNonActive.length > 0 ? <ListNotes keyword={this.state.keyword} notes={NotesNonActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} /> : <EmptyMsg />}
                
                     <h2>Arsip</h2>
                    {NotesActive.length > 0 ? <ListNotes keyword={this.state.keyword} notes={NotesActive} onDelete={this.onDeleteHandler} onArchived={this.onArchivedEventHandler} />
                    : <EmptyMsg />}
                    
                </div>
                

            </div>
        );
    }
}


export default App;