import { useNavigate } from "react-router-dom";

function Logout() {
    const navigate = useNavigate();
    const confirmLogout = "Are you sure you want to log out?"

    const navigateHandler = () => {
        const userConfirmed = window.confirm(confirmLogout)
        if (userConfirmed) {
            navigate("/")
        } else {}
    }

    return (
        <button onClick={navigateHandler} id='back-button'>Logout</button>
    )
}

export default Logout;