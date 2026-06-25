import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full z-20 px-8 py-2 bg-gradient-to-b from-black">
      <img
        className="w-44"
        src={logo}
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;