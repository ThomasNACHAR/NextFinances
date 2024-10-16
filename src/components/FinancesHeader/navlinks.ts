interface Navlink {
    name: string;
    href: string;
    logo: string;
    bg: string;
}

const navlinks: Navlink[] = [
    {
        name: "Dashboard",
        href: "/finances",
        logo: "/svg/dashboard.svg",
        bg: "bg-myred"
    },
    {
        name: "Dépenses",
        href: "/finances",
        logo: "/svg/money.svg",
        bg: "bg-mygreen"
    },
    {
        name: "Ajouter une dépense",
        href: "/finances/add",
        logo: "/svg/plus.svg",
        bg: "bg-mygreen"
    },
    {
        name: "Utilisateur",
        href: "/finances/profile",
        logo: "/svg/user.svg",
        bg: "bg-mygreen"
    },
    {
        name: "Paramètres",
        href: "/finances",
        logo: "/svg/settings.svg",
        bg: "bg-mygreen"
    },
    {
        name: "Aide",
        href: "/finances",
        logo: "/svg/question.svg",
        bg: "bg-mygreen"
    },
    {
        name: "Accueil",
        href: "/",
        logo: "/svg/home.svg",
        bg: "bg-myred"
    },
]

export default navlinks;