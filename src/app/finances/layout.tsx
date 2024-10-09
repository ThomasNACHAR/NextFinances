import Header from "@/components/Header";

export default function FinancesLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex p-8 min-h-screen bg-financesbg">
        <Header />
        <main>
            {children}
        </main>
        </div>
    )}