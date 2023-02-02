const HamburgerButton = ({ open, setOpenMenu }) => {
  return (
    <div className="z-50 md:hidden">
      <input
        type="checkbox"
        onChange={(e) => setOpenMenu(e.target.checked)}
        checked={open}
        id="hamburger"
      />
      <label htmlFor="hamburger">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </div>
  );
};

export default HamburgerButton;
