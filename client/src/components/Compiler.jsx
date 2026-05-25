import Button from "../components/Button.jsx"
import {
    Card,
    CardContent,
    CardDescription,
} from "@/components/ui/card"

import {
    Field,
    FieldLabel,
} from "@/components/ui/field"
import { Textarea } from "@/components/ui/textarea"


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
        <div className="mx-auto max-w-3xl w-full p-6">
            <form className="flex flex-col justify-center items-center gap-4 " onSubmit={handleSubmit}>
                <Field>
                    <FieldLabel htmlFor="textarea-code" className="text-white fw-bold text-base">{label}</FieldLabel>
                    <Textarea id="textarea-code" name={name}
                       className="text-white resize-none overflow-y-auto h-64 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black"
                        rows={10}
                        placeholder={placeholder}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        required />
                    <Button buttonLabel={buttonLabel} />
                </Field>
                <div>

                </div>

            </form>

            {
                Object.keys(result).length > 0 && (
                    <Card className="flex flex-col justify-center max-w-4xl mx-auto bg-zinc-900 border border-zinc-800 rounded-2xl">
                        <CardDescription className="mb-6 text-center font-bold text-3xl text-white" >Expression Result</CardDescription>
                        <CardContent className="grid grid-cols-2 gap-4">
                           
                            {
                                Object.entries(result).map(([key, value]) => {
                                    return <ResultCard key={key} title={LABELS[key]} value={value} />
                                })
                            }
                        </CardContent>
                    </Card>
                )
            }
        </div>
    )
}