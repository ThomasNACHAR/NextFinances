import UserCard from "@/components/Dashboard/UserCard";

export default function Dashboard() {
    return (
        <div className={"h-full grid grid-cols-[30%_50%_20%] gap-4"}>
            <div className={"grid grid-rows-2 h-full gap-4"}>
                <UserCard/>
                <UserCard/>
            </div>
            <div className={"border-2 border-white rounded-xl"}>

            </div>
            <div className={"border-2 border-white rounded-xl"}>

            </div>
        </div>
    )
}