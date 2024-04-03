import css from './ImageGallery.module.css'

const  ImageGallery=({results}) =>{
  return (
    <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map((result) => {
          return (
          <li key={result.id} className={css.galleryItem}>
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
