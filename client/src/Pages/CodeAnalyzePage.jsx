import Compiler from "../components/Compiler.jsx";

export default function CodeAnalyzePage() {
    return (
        <div>
            <Compiler placeholder="// Paste your code here..." name="analyze" buttonLabel="Analyze 🚀" label="Enter Code" />
        </div>
    )
}