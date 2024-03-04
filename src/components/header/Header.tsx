import "./header.scss";
const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__body">
          <a href="/" className="header__logo">
            TodoApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
