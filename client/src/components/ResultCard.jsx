import {
    Card,
    CardContent,
} from "@/components/ui/card"

export default function ResultCard({ title, value }) {
    return (
        <Card className="p-4 rounded-xl bg-zinc-800 border border-zinc-700 hover:bg-zinc-700 transition-all">
            <CardContent className="flex flex-col items-center justify-center space-y-2">
                <p className="text-sm font-medium  text-zinc-400">{title}</p>
                <p className="text-2xl text-white font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}