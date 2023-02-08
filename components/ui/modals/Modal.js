import IconButton from '../buttons/IconButton';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ location, children, setOpenModal, open }) => {
  const modalAlign = {
    start: 'items-start',
    center: 'items-center',
    end: 'items-end'
  };

  return (
    <div
      className={`${
        open && 'modalOpened'
      } fixed inset-0 z-50 mx-auto flex w-full overflow-y-auto overflow-x-hidden outline-none focus:outline-none ${
        modalAlign[location]
      } justify-center  bg-black bg-opacity-70 py-8`}>
      <div className="relative mx-auto w-3/4 p-1 md:w-2/4">
        <div className="right-n absolute -top-5 -right-5 z-50 text-white outline-none focus:outline-none">
          <IconButton onClick={() => setOpenModal(false)} size="large">
            <AiOutlineClose />
          </IconButton>
        </div>

        {children}
      </div>
    </div>
  );
};
export default Modal;
