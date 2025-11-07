import { RxHamburgerMenu } from "react-icons/rx";
import GreenLineLogo from "../../assets/img/GreenLine-1.webp";
import "../Header/_header.scss";

export default function Header() {
  return (
    <header>
      <nav aria-label="principal" className="navbar">
        <img src={GreenLineLogo} alt="Greenline Logo" />
        <RxHamburgerMenu
          style={{ color: "#7ebc00", fontSize: "2rem", cursor: "pointer" }}
        />
      </nav>
    </header>
  );
}
