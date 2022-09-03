import React from 'react';
import ItemNotes from './ItemNotes';

function ListNotes({keyword, notes, onDelete, onActive, onArchived}) {
    if(notes.length > 0) {
        notes = notes.filter((note) => {
            if(keyword === '') {
                return note;
            }
            return note.title.toLowerCase().includes(keyword.toLowerCase());
        })
    }

    return (
        <div className='notes-list'>
            {
                notes.map((note) => (
                    <ItemNotes
                    key={note.id}
                    onDelete={onDelete} 
                    {...note}
                    id={note.id}
                    onArchived={onArchived}
                    onActive={onActive}
                    isArchived={note.archived}

                    />
                ))
            }
        </div>
    );
}

export default ListNotes;