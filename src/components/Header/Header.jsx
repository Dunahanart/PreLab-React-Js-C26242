import { Link } from "react-router-dom";
import { Nav } from "../nav/Nav";
import logo from "../../assets/react.svg";
import "./Header.css";

export const Header = () => {
    return ( 
    <header>
        <div className="logo-container">
            <Link to="/">
                <img src={logo} alt="Logo react" />
                <span>Reactiva</span>
            </Link>
        </div>
        <Nav />
    </header>
    );
}