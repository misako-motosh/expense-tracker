import { SourceContext } from "./SourceProvider";
import React, { useContext } from "react";

function ClearButton() {
    const { source1, setSource1, source2, setSource2, others, setOthers } = useContext(SourceContext);

    const handleClearButton = () => {
        if (source1 >= 0) {
            setSource1('')
        }
        if (source2 >= 0) {
            setSource2('')
        }
        if (others >= 0) {
            setOthers('')
        }
    }

    return (
        <button onClick={handleClearButton}>Clear</button>
    )
}

export default ClearButton;