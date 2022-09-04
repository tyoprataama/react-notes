import React from 'react';
import NotesHeaderSearch from './SearchBar';

function Headers({search, onSearchChange}) {
  return (
    <div className='note-app__header'>
      <NotesHeaderSearch 
        search={search}
        onSearchChange={onSearchChange}/>
    </div>
  );
}

export default Headers;