import { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';
import { fetchImages } from './components/API/API';
import { Toaster } from 'react-hot-toast';

function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        setImages((prev) => [...prev, ...data.results]);
      } catch (error) {
        setError('Something went wrong. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
    setError(null);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const openModal = (image) => {
    setSelectedImage(image.urls.regular);
    setShowModal(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setShowModal(false);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearch} />
      {error && <ErrorMessage message={error} />}
      {images.length > 0 && (
        <ImageGallery images={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {!isLoading && images.length > 0 && <LoadMoreBtn onClick={handleLoadMore} />}
      {showModal && (
        <ImageModal
          isOpen={showModal}
          onClose={closeModal}
          largeImageURL={selectedImage}
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
