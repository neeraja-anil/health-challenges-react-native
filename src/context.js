import React, { useState } from 'react';


export const GlobalContext = React.createContext({
    incompleteItems: {},
    completedItems: {},
    setIncompleteItems: () => { },
    setCompleteItems: () => { },
});

export const GlobalContextProvider = (props) => {
    const [incomplete, setIncomplete] = useState({});
    const [complete, setComplete] = useState({});
    return (
        <GlobalContext.Provider
            value={{
                incompleteItems: incomplete,
                completedItems: complete,
                setIncompleteItems: setIncomplete,
                setCompleteItems: setComplete,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
};