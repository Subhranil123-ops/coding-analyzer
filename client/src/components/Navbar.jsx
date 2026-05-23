import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                Home
            </Link>
            <Link to="/expression">
                Expression Evaluator
            </Link>
            <Link to="/analyze">
                Code Analyzer
            </Link>
        </nav>
    )
}
