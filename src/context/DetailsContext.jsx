import React, { createContext, useState } from 'react';

const DetailsContext = createContext();

export const MyProvider = ({ children }) => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
        companyName: '',
        agency: '',
    });

    return (
        <DetailsContext.Provider value={{ userData, setUserData }}>
            {children}
        </DetailsContext.Provider>
    );
};

export default DetailsContext;
