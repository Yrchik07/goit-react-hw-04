import { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';
import css from './SearchBar.module.css'
const SearchBar = ({ onSubmit }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (searchTerm.trim() === '') {
      toast.error('Please enter a search term');
      return; 
    }
    onSubmit(searchTerm);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <header>
      <form onSubmit={handleSubmit} className={css.SearchBar}>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      <Toaster position="top-left" aria-label="Search"/>
    </header>
  );
};

export default SearchBar;