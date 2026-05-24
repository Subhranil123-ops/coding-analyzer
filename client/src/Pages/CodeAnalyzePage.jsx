import Compiler from "../components/Compiler.jsx";

export default function CodeAnalyzePage() {
    return (
        <div>
            <Compiler placeholder="// Paste your code here..." name="code" buttonLabel="Analyze 🚀" label="Enter Code" />
        </div>
    )
}