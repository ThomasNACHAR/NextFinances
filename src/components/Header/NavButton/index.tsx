import Link from "next/link";

export default function NavButton({
    name,
    href,
    logo,
    bg
                                  }) {
    return (
        <Link href={href}>
            <div className={"p-2 rounded-xl "+bg}>
                <img className="" src={logo} alt={name}/>
            </div>
            
        </Link>
    )
}