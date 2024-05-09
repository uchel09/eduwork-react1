import SiderBar from "../SiderBar";
import "./navbar.scss";


const MyNavbar = () => {
  const items = ["Homepage", "About", "Project", "Contact"];

  return (
    <nav>
      {/* sidebar */}
      <SiderBar />

      <div className="wrapper">
        <span>Portofolio</span>
        <div className="menu">
          {items.map((item, index) => {
            return (
              <a href={`#${item}`} key={index}>
                {item}
              </a>
            );
          })}
        </div>
        <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
