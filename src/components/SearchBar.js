import React from 'react';

function SearchBar({search, onSearch}){
    return(
        <div className='note-app__header'>
        <h1>numnum notes</h1>
        <div className='note-search'>
            <input value={search} id='search' type="text" placeholder='Cari catatan ...' onChange={(event)=> onSearch(event)}/>
        </div>
    </div>
    )
}
export default SearchBar;