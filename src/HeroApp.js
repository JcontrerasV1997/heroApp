import React from 'react'
import { AuthContext } from './auth/AuthContext'
import { HookAuth } from './hooks/HookAuth'

import { AppRouter } from './routers/AppRouter'

export const HeroApp = () => {
const [user, dispatch] = HookAuth()
    return (

        
        <AuthContext.Provider value={{user,dispatch}}>
           <AppRouter></AppRouter>
        </AuthContext.Provider>
    )
}
