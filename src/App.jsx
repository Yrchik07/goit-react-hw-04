import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import { requestPhotosByQuery } from './services/api';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import ImageGallery from './components/ImageGallery/ImageGallery'
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
const App = () => {
  const [results, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const[query, setQuery]=useState('')


  useEffect(() => {
    if (!query) return;

    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query);
        setPhoto(data.results);
        
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [query]);

  const onSubmit = (searchTerm) => {
    setQuery(searchTerm);
  };

  return (
    <div>
      <SearchBar onSubmit={onSubmit}/>
      {isLoading&&<Loader/>}
      {isError&&<ErrorMessage/>}
      {results&&<ImageGallery results={results}/>}
      {results&&<LoadMoreBtn onSubmit={onSubmit}/>}
    </div>
  );
};

export default App;
