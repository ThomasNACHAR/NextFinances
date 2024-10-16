"use client"

import FinancesHeader from "../../components/FinancesHeader"
import localFont from "next/font/local"
import { store } from "@/app/finances/store/store"
import { StoreProvider } from "@/app/finances/store/StoreProvider"
import { useSelector } from "react-redux"
import RegisterForm from "@/components/RegisterForm"
import "./style.css"
import ConnectionPanel from "@/components/ConnectionPanel";

const helveticaNeue = localFont({
    src: "./fonts/HelveticaNeue.woff",
    variable: "--font-helvetica-neue",
    weight: "100 900",
})

export default function FinancesLayout({
                                           children,
                                       }: {
    children: React.ReactNode
}) {
    return (
        <StoreProvider store={store}>
            <LayoutContent children={children} />
        </StoreProvider>
    )
}

const LayoutContent = ({ children }) => {
    const user = useSelector((state) => state.user.userInfo)

    return (
        <div className={`grid grid-cols-[5rem_1fr] p-8 min-h-screen bg-financesbg text-white ${helveticaNeue.variable}`}>
            <FinancesHeader />
            <main className="p-4 relative">
                {user ? (
                    children
                ) : (
                    <ConnectionPanel/>
                )}
            </main>
        </div>
    )
}
