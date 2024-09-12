import { Link } from "react-router-dom";
import Logo from "../assets/moivelogo.png";
const Navbar = () => {
  return (
    <div className="flex border space-x-10 items-center pl-8 py-4">
      <img className="w-[180px]" src={Logo} alt="" />
      <Link to="/" className="text-blue-500 text-3xl font-bold">
        Home
      </Link>
      <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
        WatchList
      </Link>
    </div>
  );
};

export default Navbar;
