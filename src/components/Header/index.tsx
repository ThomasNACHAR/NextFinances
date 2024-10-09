import NavButton from "@/components/Header/NavButton";

export default function Header() {
    const navlinks = [
        {
            name: "Dashboard",
            href: "/finances",
            logo: "svg/dashboard.svg",
            bg: "bg-myred"
        },
        {
            name: "Dépenses",
            href: "/finances",
            logo: "svg/money.svg",
            bg: "bg-mygreen"
        },
        {
            name: "Ajouter une dépense",
            href: "/finances",
            logo: "svg/plus.svg",
            bg: "bg-mygreen"
        },
        {
            name: "Utilisateur",
            href: "/finances",
            logo: "svg/user.svg",
            bg: "bg-mygreen"
        },
        {
            name: "Paramètres",
            href: "/finances",
            logo: "svg/settings.svg",
            bg: "bg-mygreen"
        },
        {
            name: "Aide",
            href: "/finances",
            logo: "svg/question.svg",
            bg: "bg-mygreen"
        },
        {
            name: "Accueil",
            href: "/",
            logo: "svg/home.svg",
            bg: "bg-myred"
        },
    ]
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