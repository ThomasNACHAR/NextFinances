import {useDispatch, useSelector} from "react-redux";
import {registerUser} from "@/app/finances/store/userSlice";

export default function RegisterForm() {

    const dispatch = useDispatch()
    const loading  = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)

    async function handleSubmit(data : FormData) {

        const user = {
            username: data.get("username"),
            email: data.get("email"),
            password: data.get("password"),
            password_confirmation: data.get("password_confirmation"),
        }

        dispatch(registerUser(JSON.stringify({user: user})))
    }

    return (
        <form action={handleSubmit} className={"flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white p-8 gap-4 rounded-xl bg-finances"}>
            <p className="text-center text-4xl mb-4">Inscription</p>
            <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="username">Nom d'utilisateur:</label>
                <input name="username" type="text"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="email">E-mail:</label>
                <input name="email" type="email"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="password">Mot de passe:</label>
                <input name="password" type="password"/>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
                <label htmlFor="password_confirmation">Confirmer le mot de passe</label>
                <input name="password_confirmation" type="password"/>
            </div>
            <button>S'inscrire</button>
        </form>
    )
}