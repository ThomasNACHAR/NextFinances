import NavButton from "@/components/FinancesHeader/NavButton";
import navlinks from "@/components/FinancesHeader/navlinks";

export default function Header() {

    return (
        <header className="min-h-full w-20 inner-shadow rounded-xl bg-finances px-4 py-16 flex flex-col gap-4 justify-center relative">
                    {
                        navlinks.map((link) => (
                            <NavButton key={link.href} {...link} />
                        ))
                    }

        </header>
    )
}