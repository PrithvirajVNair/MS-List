import React, { createContext, useState } from 'react'


export const userProfileUpdateContext = createContext("")

const ContextShare = ({ children }) => {

    const [userContextProfile,setUserContextProfile] = useState({})

  return (
    <userProfileUpdateContext.Provider value={{setUserContextProfile,userContextProfile}}>
        {children}
    </userProfileUpdateContext.Provider>
   
  )
}

export default ContextShare