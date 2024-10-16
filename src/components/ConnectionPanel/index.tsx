import {useSelector} from "react-redux";
import RegisterForm from "@/components/RegisterForm";
import LoginForm from "@/components/LoginForm";

export default function ConnectionPanel() {
    const connectionPanel = useSelector(state => state.user.connectionPanel)
    return (
        <div>
            {connectionPanel === "login" ? <LoginForm/> : connectionPanel === "register" && <RegisterForm/>}
        </div>
    )
}