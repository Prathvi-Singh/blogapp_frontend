import { createContext ,useState } from "react";

export const DataContext = createContext(null)

const DataProvider = ({children}) =>{
    var name=sessionStorage.getItem('name')
    var email=sessionStorage.getItem('email');
    var id=sessionStorage.getItem('id');
    const [account,setAccount]=useState({email:email ,name:name,id:id});
    console.log("id : ",account.id);
   
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