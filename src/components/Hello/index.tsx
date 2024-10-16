const daysOfTheWeek = [
    "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
]

export default function Hello() {

    const today = new Date();
    const day = today.getDay();
    return (
        <div className={"flex flex-col gap-2"}>
            <div className={"text-4xl"}>Bonjour, Thomas !</div>
            <p className={"text-xl"}>Nous sommes {daysOfTheWeek[day].toLowerCase()}. Qu'avez-vous prévu aujourd'hui ?</p>
        </div>
    )
}