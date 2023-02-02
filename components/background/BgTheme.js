import Image from "next/image";
import sun from "../../public/sun.png";
import deathStar from "../../public/deathStar.png";
import { useTheme } from "next-themes";

const BgTheme = () => {
  const { theme } = useTheme();

  return (
    <div className="background-container">
      <Image
        width={1000}
        height={1000}
        src={theme === "dark" ? deathStar : sun}
        alt=""
        priority
      />
      {theme === "dark" ? (
        <>
          <div className="stars"></div>
          <div className="twinkling"></div>
        </>
      ) : (
        <>
          <div className="clouds"></div>
          <div className="dayBg"></div>
        </>
      )}
    </div>
  );
};

export default BgTheme;
