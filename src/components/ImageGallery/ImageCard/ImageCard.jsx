function ImageCard({result}) {
  return (
            <div>
              <img src={result.urls.small} alt={result.alt_description} />
            </div>
  );
}

export default ImageCard;
