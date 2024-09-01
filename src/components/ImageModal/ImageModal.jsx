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
    >css
      <img src={largeImageURL} alt="" />
      <button type="button" className={css.closeButton} onClick={onClose}>
        Close
      </button>
    </Modal>
  );
}
