import {useDispatch, useSelector} from "react-redux";
import {registerUser, setConnectionPanel} from "@/app/finances/store/userSlice";

export default function RegisterForm() {

    const dispatch = useDispatch()
    const loading  = useSelector(state => state.user.loading)
    const error = useSelector(state => state.user.error)
    const connectionPanel = useSelector(state => state.user.connectionPanel)

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
        <form action={handleSubmit} className={"w-1/3 flex flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white p-8 gap-4 rounded-xl bg-finances"}>
            <p className="text-center text-4xl">Inscription</p>
            <p onClick={() => {dispatch(setConnectionPanel("login"))}} className="cursor-pointer text-center mb-4 underline">Déjà inscrit ? Se connecter</p>
            {error && <div className={"error"}>{error?.message}</div>}
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
            <button disabled={loading}>{loading ? "Inscription..." : "S'inscrire"}</button>
        </form>
    )
}