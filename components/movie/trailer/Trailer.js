import Modal from '../../ui/modals/Modal';

const Trailer = ({ setOpenModal, trailerKey, openModal, movieId }) => {
  return (
    <Modal setOpenModal={setOpenModal} open={openModal} location="center">
      <iframe
        className="aspect-video w-full"
        src={`https://www.youtube.com/embed/${trailerKey}?origin=http://localhost:3000/movie/${movieId}`}
        frameBorder="0"
        allow="autoplay; encrypted-media; fullscreen"
        allowFullScreen
        title="video"
      />
    </Modal>
  );
};

export default Trailer;
