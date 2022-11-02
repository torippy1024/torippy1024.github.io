import { Link } from "react-router-dom";
import { AiOutlineDown, AiOutlineMenu } from "react-icons/ai";

type MenuType = {
  horizontal: boolean;
};

const Header = () => {
  const Menu = ({horizontal}: MenuType) => 
    <ul className={`menu ${horizontal ? "menu-horizontal" : "bg-base-200"} p-0`}>
      <li><Link to="/">hoge1</Link></li>
      <li><Link to="/">hoge2</Link></li>
    </ul>;

  return (
    <div className="navbar">
      <div className="md:hidden flex-none">
          <ul className="menu menu-horizontal p-0">
            <li tabIndex={0} className="z-10">
              <a>
                <AiOutlineMenu />
              </a>
              <Menu horizontal={false} />
            </li>
          </ul>
      </div>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">Portfolio</Link>
      </div>
      <div className="hidden md:block flex-none">
        <ul className="menu menu-horizontal p-0">
          <Menu horizontal={true} />
        </ul>
      </div>
    </div>
  );
};

export default Header;