import Hello from "@/components/Hello";
import Dashboard from "@/components/Dashboard";

export default function Finances() {
    return (
        <section className="min-w-full min-h-full relative grid grid-rows-[1fr_9fr] gap-4">
                <Hello/>
                <Dashboard/>
        </section>
    )
}