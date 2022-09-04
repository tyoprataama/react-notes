import React from 'react';
import BodyNotes from './BodyNotes';
import DeleteBtn from './DeleteBtn';
import ArchiveBtn from './ArchiveBtn';

function ItemNotes({title, body, id, onDelete, onArchived, isArchived}){
    return(
        <div className='note-item'>
            <BodyNotes title={title} body={body}/>
            <DeleteBtn id={id} onDelete={onDelete}/>
            <ArchiveBtn id={id} onArchived={onArchived} isArchived={isArchived}/>
     
        </div>
    );
}

export default ItemNotes;