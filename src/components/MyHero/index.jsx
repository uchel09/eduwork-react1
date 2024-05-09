
import MyText from "./Text";
import MyImage from "./Image";

const MyHero = () => {
  return (
    <div className="hero-container">
      <div className="me">
        <MyImage />
        <MyText />
      </div>
    </div>
  );
};

export default MyHero;
