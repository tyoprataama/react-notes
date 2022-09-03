import React from 'react';
import ArchiveBtn from './ArchivedBtn';
import DeleteBtn from './DeleteBtn';
import ItemBody from './ItemBody';

function ItemNotes({title, id, body, onDelete, onArchived, isArchived}) {
    return (
        <div className='note-item'>
            <ItemBody title={title} body={body}/>
            <DeleteBtn id={id} onDelete={onDelete}/>
            <ArchiveBtn id={id} onArchived={onArchived} isArchived={isArchived}/>
        </div>
    );
}

export default ItemNotes;