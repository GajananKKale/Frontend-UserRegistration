
import { createContext } from 'react'
export let BackendURLContext = createContext()
import React, { children } from 'react'
function BackendulrContext({ children }) {
    let back_URL = "https://backend-userregistration.onrender.com"
    return (
        <BackendURLContext.Provider value={{ back_URL }}>
            {children}
        </BackendURLContext.Provider>
    )
}

export default BackendulrContext
