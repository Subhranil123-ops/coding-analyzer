import Button from "../components/Button.jsx";

export default function HomePage() {
    return (
        <div className="min-h-screen p-6 bg-black flex flex-col gap-4 justify-center items-center" >
            <p className="text-7xl font-bold text-blue-500">
                Expression & Code Analyzer
            </p>

            <p  className="text-white text-xl">
                Convert expressions (Infix, Prefix, Postfix) or analyze code complexity and nesting — all in one place.
            </p>

            <div className="flex gap-4">

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