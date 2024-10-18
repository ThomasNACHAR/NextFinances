import {useDispatch, useSelector} from "react-redux";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";
import {useEffect} from "react";
import {fetchUser} from "@/app/finances/store/userSlice";

export default function ConnectionPanel() {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUser())
    }, []);

    const connectionPanel = useSelector(state => state.user.connectionPanel)
    return (
        <div>
            {connectionPanel === "login" ? <LoginForm/> : connectionPanel === "register" && <RegisterForm/>}
        </div>
    )
}