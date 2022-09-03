import React from 'react';

function Header ({search, onSurf}) {
    return (
        <header className='note-app__header'>
            <h1>numnum note</h1>
            <div className='note-search'>
            <input value={search} id='search' type='text' placeholder='Cari catatan ...' onChange={(event => onSurf(event))}/>
            </div>
        </header>
    )
}

export default  Header;