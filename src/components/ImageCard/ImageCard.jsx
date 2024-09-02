import css from './ImageCard.module.css';

export default function ImageCard({ image, onClick }) {
  const { urls, alt_description } = image;

  return (
    <div className={css.card}>
      <img
        src={urls.small}
        alt={alt_description || 'Image without description'}
        className={css.image}
        onClick={onClick} 
        loading="lazy" 
      />
    </div>
  );
}
