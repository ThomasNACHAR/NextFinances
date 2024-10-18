import axios from "axios"

const token = localStorage.getItem("token")

const axiosFinances = axios.create({
    baseURL: "http://localhost:3000",
    headers: {
        "Content-Type": "application/json",
        "Authorization": token ? `Bearer ${token}` : ""
    }
})

export default axiosFinances