import Button from "../components/Button.jsx";

export default function HomePage() {
    return (
        <div>
            <p className="font-bold text-blue-500">
                Expression & Code Analyzer
            </p>

            <p >
                Convert expressions (Infix, Prefix, Postfix) or analyze code complexity and nesting — all in one place.
            </p>

            <div>

                <a href="/expression">
                    <Button buttonLabel="⚡ Expression Tool" />
                </a>

                <a href="/analyze">
                    <Button buttonLabel="💻 Code Analyzer" />
                </a>
            </div>
        </div>
    )
}