import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function ResultCard({ title, value }) {
    return (
        <Card>
            <CardContent>
                <h6>{title}</h6>
                <p>{value}</p>
            </CardContent>
        </Card>
    )
}