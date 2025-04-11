import { Link } from "react-router-dom";

const NavLinks = ({
  items,
  isMobile = false,
  onClick = () => {},
}: {
  items: Array<{ id: number; to: string; name: string }>;
  isMobile?: boolean;
  onClick?: () => void;
}) => {
  return items.map((item) => (
    <Link
      key={item.id}
      to={'/'}
      className={isMobile ? "nav-link-mobile" : "nav-link"}
      onClick={onClick}
    >
      {item.name}
    </Link>
  ));
};
export default NavLinks;
