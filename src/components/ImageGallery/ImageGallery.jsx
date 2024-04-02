const  ImageGallery=({results}) =>{
  return (
    <ul>
      {Array.isArray(results) &&
        results.map((result) => {
          return (
          <li key={result.id}>
            <div>
              <img src={result.urls.small} alt={result.alt_description
} />
            </div>
          </li>)
        })}
        </ul> 
  );
}

export default ImageGallery;
