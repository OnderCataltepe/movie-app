import TextButton from '../../ui/buttons/TextButton';
import { MENU_DATA } from '../../../constants';

const GenresList = ({ genres }) => {
  return (
    <div className="mt-2 flex w-full flex-wrap ">
      {genres.map((genre) => {
        const href = MENU_DATA.find((item) => item.title === 'Movies').children.find(
          (sub) => sub.id === genre.id
        ).path;
        return <TextButton color="white" href={href} key={genre.id} text={genre.name} />;
      })}
    </div>
  );
};

export default GenresList;
