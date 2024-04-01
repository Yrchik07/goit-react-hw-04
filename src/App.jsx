import { useEffect, useState } from 'react';

import SearchBar from './components/SearchBar/SearchBar';
import { requestPhotosByQuery } from './services/api';

const App = () => {
  const [photos, setPhoto] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
const[query, setQuery]=useState('')


  useEffect(() => {
    if (!query) return;

    async function fetchPhotosByQuery() {
      try {
        setIsLoading(true);
        const data = await requestPhotosByQuery(query);
        setPhoto(data.products);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchPhotosByQuery();
  }, [query]);

  // const onSetSearchQuery = (searchTerm) => {
  //   setQuery(searchTerm);
  // };

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default App;
