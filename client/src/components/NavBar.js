import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Menu>
      <Link to="/">
        <Menu.Item name="Home" />
      </Link>
    </Menu>
  );
};

export default NavBar;
