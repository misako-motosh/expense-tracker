import { useNavigate } from "react-router-dom";

function BackButton() {
    const navigate = useNavigate();

    const navigateHandler = () => {
        navigate("/home");
    }

    return (
        <button onClick={navigateHandler} id='back-button'>Back</button>
    )
}

export default BackButton;