import React from 'react';

function ArchiveBtn({id, onArchived, isArchived}){
    return(
        <button className="note-item__archive-button" onClick={()=> onArchived(id)}>{isArchived ? 'Pindahkan':'Archieve'}</button>
    );
}

export default ArchiveBtn;