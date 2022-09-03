import React from 'react';
import { showFormattedDate } from '../utils/data';

function ItemBody({title, body}) {
    return(
        <div className='note-item__body'>
            <h3 className='note-item__title'>{title}</h3>
            <span className='note-item__date'>{showFormattedDate}</span>
            <p className='note-item__body'>{body}</p>
        </div>
    );
}

export default ItemBody;