import Button from "../components/Button.jsx"
import { useEffect, useState } from "react";
import axios from "axios";

export default function Compiler({ placeholder, name, buttonLabel, label }) {
    const [input, setInput] = useState("");
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        const res = await axios.post(`http://localhost:3000/${name}`, {
            expression: input
        });
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>

            <div>
                <label>
                    {label}
                </label>

                <textarea
                    rows="3"
                    name={name}
                    placeholder={placeholder}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    required
                ></textarea>
            </div>

            <div>
                <Button buttonLabel={buttonLabel} />
            </div>

        </form>
    )
}