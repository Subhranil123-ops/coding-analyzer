import Compiler from "../components/Compiler.jsx";

export default function ExpressionEvaluationPage() {
    return (
        <div className="min-h-screen p-6 bg-black flex flex-col gap-4 justify-center items-center">
            <Compiler placeholder="Example: 5 6 2 * + 3 -" name="expression" buttonLabel="Evaluate 🚀" label="Enter Expression" resultHeading="Expression Result" />
        </div>
    )
}