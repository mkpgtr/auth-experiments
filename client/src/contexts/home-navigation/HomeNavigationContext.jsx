import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const HomeNavigationContext = createContext();




export const HomeNavigationProvider = ({ children }) => {


    const [data, setData] = useState(null);
    
  
 useEffect(()=>{
   const fetchData = async () => {
    try {
        const response = await axios.get('/api/homepageData');
        setData(response.data);
    } catch (error) {
        console.error(error)
    }
    }

    fetchData();
 },[])
    return (
        <HomeNavigationContext.Provider value={{myhomeData : data}}>
            {children}
        </HomeNavigationContext.Provider>
    );
}

export const useHomeNavigation = () => {
    return useContext(HomeNavigationContext);
}