import React from 'react';
import SearchIcon from './SearchIcon';
import UserIcon from './UserIcon';
import './SearchBar.css';

function SearchBar() {
  return (
    <div className='search-bar__container'>
      <div className='search-bar__content'>
        <form className='search-bar__from'>
          <label><SearchIcon size='24' color='#2E2217'/></label>
          <input type='text' placeholder='Search'></input>
        </form>
        <button className='account-btn'><UserIcon size='24' color='#2E2217'/></button>
      </div>
    </div>
  )
}

export default SearchBar;