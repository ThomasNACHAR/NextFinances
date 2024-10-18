import NavButton from "@/components/FinancesHeader/NavButton";
import navlinks from "@/components/FinancesHeader/navlinks";
import {useDispatch} from "react-redux";
import {logout} from "@/app/finances/store/userSlice";

export default function Header() {

    const dispatch = useDispatch()
    function handleLogout() {
        dispatch(logout())
    }

    return (
        <header
            className="min-h-full w-20 inner-shadow rounded-xl bg-finances px-4 py-16 flex flex-col gap-4 justify-center relative">
            {
                navlinks.map((link) => (
                    <NavButton key={link.name} {...link} />
                ))
            }
            <div onClick={handleLogout} className={"hover:scale-125 cursor-pointer transition-transform duration-300 p-2 rounded-xl bg-myred"}>
                <img className="" src={"/svg/logout.svg"} alt={"Déconnexion"}/>
            </div>
        </header>
    )
}