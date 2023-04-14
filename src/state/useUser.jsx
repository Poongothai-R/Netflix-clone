// Node modules
import { createContext, useContext, useState, } from "react";

// Properties
const Context = createContext();

export function UserProvider({ children, storageKey, adminKey }) {

    const [uid, setUid] = useState(loadStorage(storageKey));
    const [isAdmin, setIsAdmin] = useState(loadStorage(adminKey));

    const value = { uid, setUid, saveUID, isAdmin, setIsAdmin,saveAdmin };


    function loadStorage(storeKey) {
        const data = localStorage.getItem(storeKey);
        return data;
    }


    function saveUID(uid) {
        localStorage.setItem(storageKey, uid);
    }
    function saveAdmin(adminId) {
        localStorage.setItem(adminKey, adminId);
    }

    return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useUser() {

    const context = useContext(Context);
    if (!context) throw new Error("useUser() must be used within <UserProvider>");
    return context;
}
