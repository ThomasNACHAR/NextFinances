import Link from "next/link";

export default function NavButton({
    name,
    href,
    logo,
    bg
                                  }) {
    return (
        <Link href={href}>
            <div className={"hover:scale-125 transition-transform duration-300 p-2 rounded-xl "+bg}>
                <img className="" src={logo} alt={name}/>
            </div>
            
        </Link>
    )
}