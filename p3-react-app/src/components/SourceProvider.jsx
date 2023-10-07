import { createContext, useState } from "react";
export const SourceContext = createContext();

function SourceProvider({children}) {
    const [source1, setSource1] = useState(null);
    const [source2, setSource2] = useState(null);
    const [others, setOthers] = useState(null);

    return(
        <SourceContext.Provider value={{ source1, setSource1, source2, setSource2, others, setOthers }}>
            {children}
        </SourceContext.Provider>
    )
}

export default SourceProvider