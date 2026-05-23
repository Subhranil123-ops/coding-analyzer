import Compiler from "../components/Compiler.jsx";

export default function ExpressionEvaluationPage() {
    return (
        <div>
            <Compiler placeholder="Example: 5 6 2 * + 3 -" name="expression" buttonLabel="Evaluate 🚀" label="Enter Expression" />
        </div>
    )
}