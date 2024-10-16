"use client"

import FinancesHeader from "../../components/FinancesHeader";
import localFont from "next/font/local";
import {store} from "@/app/finances/store/store";
import {StoreProvider} from "@/app/finances/store/StoreProvider";

const helveticaNeue = localFont({
    src: "./fonts/HelveticaNeue.woff",
    variable: "--font-helvetica-neue",
    weight: "100 900",
});

export default function FinancesLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <StoreProvider store={store}>
            <div
                className={`grid grid-cols-[5rem_1fr] p-8 min-h-screen bg-financesbg text-white ${helveticaNeue.variable}`}>
                <FinancesHeader/>
                <main className={"p-4"}>
                    {children}
                </main>
            </div>
        </StoreProvider>

    )
}