import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 border-b">
            <div className="flex justify-center items gap-4 text-2xl font-bold">
                AlgoLens
            </div>
            <div className="flex justify-center gap-4 text-lg font-medium">
                <Link to="/">
                    Home
                </Link>
                <Link to="/expression">
                    Expression Evaluator
                </Link>
                <Link to="/analyze">
                    Code Analyzer
                </Link>
            </div>
        </nav>
    )
}
