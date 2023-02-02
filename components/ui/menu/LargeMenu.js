import { MENU_DATA } from '../../../constants';
import MenuItem from './MenuItem';
const LargeMenu = () => {
  return (
    <>
      {MENU_DATA.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </>
  );
};

export default LargeMenu;
