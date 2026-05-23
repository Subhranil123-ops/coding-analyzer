import Button from "../components/Button.jsx";

export default function HomePage() {
    return (
        <div>
            <h1>
                Expression & Code Analyzer
            </h1>

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