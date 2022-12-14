import React, { createContext, useReducer} from "react";
import { initialState, UserReducer } from '../reducers/UserReducer';
// trata as informações dos usuarios 
export const UserContext = createContext();

export default({children}) => {
  const [ state, dispatch] = useReducer(UserReducer, initialState);


    return (
        <UserContext.Provider value={{state, dispatch}}>
            {children}
        </UserContext.Provider>
    )

}
