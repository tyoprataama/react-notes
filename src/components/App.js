import React from 'react';
import ListNotes from './List';
import { getInitialData, showFormattedDate } from '../utils/data';
import Input from './Input';
import EmptyNotes from './EmptyNotes';
import Header from './Header';

class PersonalNotes extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
            date: showFormattedDate(new Date()),
        }   
        this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
        this.onArchivedHandler = this.onArchivedHandler.bind(this);
        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
    }

    onSearchHandler(event) {
        this.setState(() => {
            return{
                search: event.target.value
            }
        })
    }

    onDeleteHandler(id) {
        const notes = this.state.notes.filter(note => note.id !== id);
        this.setState({notes});
    }

    onArchivedHandler(id) {
        const notes = this.state.notes.map((note) => 
            note.id === id ? {...note, archived: !note.archived} : note)
            this.setState({notes});
    }

     onAddNoteHandler({title, body}) {
        this.setState((prevState) => {
            return{
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        archived: false,
                        createdAt: this.state.date,
                    }
                ]
            }
        })
    }

    render() {
        const notes = this.state.notes.filter((note) => note.title.toLowerCase().includes(this.state.search.toLowerCase()))
        const ActiveNotes = notes.filter((note) => {
            return note.archived === true
        });
        const InactiveNotes = notes.filter((note) => {
            return note.archived === false
        });
        return (
            <div>
                <Header search={this.state.search} onSurf={this.onSearchHandler} />
                <div className='note-app__body'>
                    <Input addNotes={this.onAddNoteHandler}/>
                    <h2>Catatan Aktif</h2>
                    {InactiveNotes.length > 0 ? <ListNotes keyword={this.state.keyword} notes={InactiveNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/> : <EmptyNotes/>}
                    <h2>Archive</h2>
                    {ActiveNotes.length > 0 ? <ListNotes keyword={this.state.keyword} notes={ActiveNotes} onDelete={this.onDeleteHandler} onArchived={this.onArchivedHandler}/> : <EmptyNotes/>}
                </div>
            </div>
        );
    }
}

export default PersonalNotes;