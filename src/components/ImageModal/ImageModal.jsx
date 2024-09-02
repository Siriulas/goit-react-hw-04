import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onClose, largeImageURL }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={css.modal}
      overlayClassName={css.overlay}
      contentLabel="Image Modal" 
    >
      <img src={largeImageURL} alt="Enlarged view of the selected image" />
      <button
        type="button"
        className={css.closeButton}
        onClick={onClose}
        aria-label="Close Modal" 
      >
        &times;
      </button>
    </Modal>
  );
}
