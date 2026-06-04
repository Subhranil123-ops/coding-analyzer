"use client"

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
import { Skeleton } from "@/components/ui/skeleton"
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"

import ResultCard from "../components/ResultCard.jsx";
import Button from "../components/Button.jsx"
import { useState } from "react";
import axios from "axios";

export default function Compiler({ placeholder, name, buttonLabel, label, resultHeading }) {
    const [input, setInput] = useState("");
    const [result, setResult] = useState({});
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            const res = await axios.post(`/api/${name}`, {
                [name]: input
            });
            setResult(res.data);
        } catch (err) {
            setError(err.response.data?.message);
            toast.error(err.response.data?.message, { duration: 3000 });
            setResult({});
        } finally {
            setLoading(false);
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

    const CARD_CONFIG = {
        expression: 4,
        code: 6,
    }

    return (
        <><Toaster richColors closeButton position="top-center" />

            <div className="mx-auto max-w-4xl w-full p-4 sm:p-6">
                <form className="flex flex-col justify-center w-full gap-4 " onSubmit={handleSubmit}>
                    <Field className="w-full">
                        <FieldLabel htmlFor="textarea-code" className="text-white fw-bold text-base">{label}</FieldLabel>
                        <Textarea id="textarea-code" name={name}
                            className={`w-full text-white resize-none overflow-y-auto min-h-[180px] md:min-h-[250px] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-black ${error.length > 0 ? "border-red-500 focus-visible:ring-red-500" : ""} ${Object.keys(result).length > 0 ? "border-green-500 focus-visible:ring-green-500" : ""}`}
                            placeholder={placeholder}
                            value={input}
                            onChange={(e) => { setInput(e.target.value); setResult({}); setError(""); toast.dismiss(); }}
                            required />
                        <Button buttonLabel={buttonLabel}
                            variant="outline"
                        />
                    </Field>
                    <div>

                    </div>

                </form>

                {
                    loading ? (<Card className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-2 sm:p-4">
                        <CardDescription className="mb-6 text-center font-bold text-xl sm:text-3xl text-white w-full" >{resultHeading}</CardDescription>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4  w-full">
                            {Array.from({ length: CARD_CONFIG[name] }).map((_, index) => (<Skeleton key={index} className="h-20 w-full rounded-xl" />))}
                        </CardContent>
                    </Card>) : (
                        Object.keys(result).length > 0 && (
                            <Card className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-2 sm:p-4">
                                <CardDescription className="mb-6 text-center font-bold text-xl sm:text-3xl text-white w-full" >{resultHeading}</CardDescription>
                                <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                                    {
                                        Object.entries(result).map(([key, value]) => {
                                            return <ResultCard key={key} title={LABELS[key]} value={value} />
                                        })
                                    }
                                </CardContent>
                            </Card>)
                    )
                }

            </div>
        </>
    )
}