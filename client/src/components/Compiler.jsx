import Button from "../components/Button.jsx"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import {
    Field,
    FieldDescription,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"


import ResultCard from "../components/ResultCard.jsx";
import { useState } from "react";
import axios from "axios";

export default function Compiler({ placeholder, name, buttonLabel, label }) {
    const [input, setInput] = useState("");
    const [result, setResult] = useState({

    })
    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            const res = await axios.post(`http://localhost:3000/${name}`, {
                [name]: input
            });
            setResult(res.data);
        } catch (err) {
            console.log(err);
        }


    }


    const LABELS = {
        result: "Result",
        prefix: "Prefix",
        infix: "Infix",
        postfix: "Postfix",
        estimatedComplexity: "Time Complexity",
        maxDepth: "Max Depth",
        while: "While",
        else: "Else",
        if: "If",
        for: "For"
    }

    return (
        <div>
            <form method="POST" onSubmit={handleSubmit}>
                <Field data-invalid>
                    <FieldLabel htmlFor="input-field-username">{label}</FieldLabel>
                    <Input
                        name={name}
                        placeholder={placeholder}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required
                    />
                </Field>

                <div>
                    <Button buttonLabel={buttonLabel} />
                </div>

            </form>
            <Card>
                <CardContent>
                    {
                        Object.keys(result).length > 0 &&
                        Object.entries(result).map(([key, value]) => {
                            return <ResultCard key={key} title={LABELS[key]} value={value} />
                        })
                    }
                </CardContent>
            </Card>
        </div>
    )
}