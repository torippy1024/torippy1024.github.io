import { Link } from "react-router-dom";
import { AiOutlineDown } from "react-icons/ai";

const Header = () => {
  return (
    <div className="navbar bg-base-200">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Title</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal p-0">
          <li><Link to="/">hoge1</Link></li>
          <li><Link to="/">hoge2</Link></li>
          <li tabIndex={0}>
            <a>
              Parent
              <AiOutlineDown />
            </a>
            <ul className="p-2 bg-base-100">
              <li><a>Submenu 1</a></li>
              <li><a>Submenu 2</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;