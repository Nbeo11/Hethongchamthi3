// UserContext.js
import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userType, setUserType] = useState(''); // 'guest', 'giangvien', 'sinhvien'

    const login = (type) => {
        setUserType(type);
    };

    const logout = () => {
        setUserType('');
    };

    return (
        <UserContext.Provider value={{ userType, login, logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};