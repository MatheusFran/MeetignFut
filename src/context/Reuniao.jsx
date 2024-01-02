import React, { createContext, useState } from "react";

export const InputContext = createContext({});

export const Reuniao = ({ children }) => {
    const [inputValue, setInputValue] = useState({});

    const handleInputChange = (event, index) => {
        setInputValue((prevInputs) => ({
            ...prevInputs,
            [index]: event.target.value,
        }));
    };

    return (
        <InputContext.Provider value={{ inputValue, handleInputChange }}>
            {children}
        </InputContext.Provider>
    );
};