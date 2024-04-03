import ImageCard from './ImageCard/ImageCard';
import css from './ImageGallery.module.css'

const  ImageGallery=({results}) =>{
  return (
    <ul className={css.gallery}>
      {Array.isArray(results) &&
        results.map((result) => {
          return (
            <li key={result.id} className={css.galleryItem}>
            <ImageCard result={result} />
            </li>
          )
        })}
        </ul> 
  );
}

export default ImageGallery;
