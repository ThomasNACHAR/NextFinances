"use client"

import {useDispatch, useSelector} from "react-redux";
import {addFunds} from "@/app/finances/store/userSlice";
import {useState} from "react";

export default function UserCard() {

    const dispatch = useDispatch()

    const { username, email, balance } = useSelector((state) => state.user.userInfo)

    const [fundsMode, setFundsMode] = useState("add")

    function handleAddFunds(data: FormData) {
        let amount = data.get("amount")
        const mode = data.get("mode")
        if (mode === "remove") {
            amount*=-1
        }
        const body = {
            amount,
            user: {
                email
            }
        }

        dispatch(addFunds(body))
    }

    return (
        <div className={"border-2 border-white rounded-xl h-full grid bg-gradient grid-rows-[7fr_3fr]"}>
            <div className={"grid grid-cols-2"}>
                <div className={"flex flex-col justify-center items-center gap-4"}>
                    <p className={"text-2xl"}>{username}</p>
                    <p>{email}</p>
                </div>
                <div className={"flex justify-center items-center"}>
                    <div className={`flex justify-center items-center text-4xl rounded-full border-4 ${balance < 0 ? "border-myred" : "border-mygreen"} w-64 h-64`}>{balance}€</div>
                </div>
            </div>
            <form action={handleAddFunds} className={`${fundsMode === "remove" ? "bg-myred" : "bg-mygreen" } rounded-b-xl p-4`}>
                <div className={"px-4"}>
                    <select onChange={(event => setFundsMode(event.target.value))} className={"card-select"} name="mode">
                        <option value={"add"}
                                className={"text-center text-xl font-bold"}>Ajouter des fonds
                        </option>
                        <option value={"remove"}
                                className={"text-center text-xl font-bold"}>Enlever des fonds
                        </option>
                    </select>
                </div>
                <div className="grid grid-cols-2 px-4 pt-4 gap-4">
                    <div className={`currency-input`}>
                        <input name="amount" className={"card-input"} type="number" step="0.01"/>
                    </div>
                    <button className={"card-button"}>{fundsMode === "remove" ? "-" : "+"}</button>
                </div>
            </form>
        </div>
    )
}