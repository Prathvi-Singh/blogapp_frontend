import { createContext ,useState } from "react";

export const DataContext = createContext(null)

const DataProvider = ({children}) =>{
    var name=sessionStorage.getItem('name')
    var email=sessionStorage.getItem('email');
    const [account,setAccount]=useState({email:email ,name:name})
   
    return (
        <DataContext.Provider value={{
            account,
            setAccount
        }}>
           {children}
        </DataContext.Provider>
    )
}

export default  DataProvider;