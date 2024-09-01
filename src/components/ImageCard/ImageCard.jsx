import css from './ImageCard.module.css';

export default function ImageCard({ image }) {
  const { urls, alt_description } = image;

  return (
    <div className={css.card}>
      <img src={urls.small} alt={alt_description} />
    </div>
  );
}
