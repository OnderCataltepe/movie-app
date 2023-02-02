import { useState, useRef } from 'react';
import IconButton from '../ui/buttons/IconButton';
import { AiOutlineSearch } from 'react-icons/ai';
import Modal from '../ui/modals/Modal';
const Searching = () => {
  const [openModal, setOpenModal] = useState(false);
  const searchRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchRef.current.value.trim().length > 0) {
      alert(searchRef.current.value);
      searchRef.current.value = '';
    }
  };
  return (
    <>
      <IconButton onClick={() => setOpenModal(true)} color="white" size="large">
        <AiOutlineSearch />
      </IconButton>
      {openModal && (
        <Modal setOpenModal={setOpenModal} open={openModal} location="start">
          <div>
            <form
              onSubmit={submitHandler}
              className="relative flex h-12 w-full animate-topToBottom items-center overflow-hidden rounded-lg bg-white focus-within:shadow-lg dark:bg-gray-300 dark:text-black">
              <div className="t grid h-full w-12 place-items-center">
                <IconButton onClick={submitHandler} color="blueDark" size="large">
                  <AiOutlineSearch />
                </IconButton>
              </div>

              <input
                className="peer h-full w-full pr-2 font-merriweather outline-none dark:bg-gray-300"
                type="text"
                id="search"
                ref={searchRef}
                placeholder="Search something.."
              />
            </form>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Searching;
