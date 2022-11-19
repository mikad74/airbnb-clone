import airbnbLogo from "../images/airbnb-ar21.svg";

function Header() {
  return (
    <header className="header">
      <img src={airbnbLogo} id="airbnb-logo" alt="airbnb" />
    </header>
  );
}

export default Header;
