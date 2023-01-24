import { Link } from "react-router-dom";

export function Header() {
    return (
        <header>
            <nav>
                <ul className="navUL">
                    <li className="navLI"><Link to="/">Home</Link></li>
                    <li className="navLI"><Link to="/about">About</Link></li>
                    <li className="navLI"><Link to="/locations">Locations</Link></li>

                    <li className="navLI"><Link to="/locationRequest">Location Request</Link></li>
                    <li className="navLI"><Link to="/contactRequest">Contact Request</Link></li>
                    
                </ul>
            </nav>
        </header>
    );
}