import Compiler from "../components/Compiler.jsx";

export default function CodeAnalyzePage() {
    return (
        <div className="min-h-screen p-6 bg-black flex flex-col gap-4 justify-center items-center">
            <Compiler placeholder="// Paste your code here..." name="code" buttonLabel="Analyze 🚀" label="Enter Code" />
        </div>
    )
}