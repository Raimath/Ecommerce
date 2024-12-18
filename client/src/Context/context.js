import { createContext, useEffect, useState } from "react";
export const Context = createContext()

export const ContextProvider = ({ children }) => {


    const [loginInfo, setloginInfo] = useState({
        _id:"",
        name:"",
        email:"",
        carts:[]
    })
    const [allProductsInfo, setallProductsInfo] = useState([])
    const [isLogedin, setisLogedin] = useState(localStorage.getItem('id'))

    const getAllProducts = async () => {
        const res = await fetch("https://ecommerce-backend-99w3.onrender.com/allproducts", {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json()
         
        setallProductsInfo(data.allproducts)
        
        console.log(data);
    }

    const getUserInfo = async () => {
        if (localStorage.getItem('id')) {
            const userid = localStorage.getItem('id')
            const res = await fetch("https://ecommerce-backend-99w3.onrender.com/user", {
                method: 'post',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ userid })
            });
            const data = await res.json()
            setloginInfo(data.user)
            console.log(data)
           
        }
    }

    useEffect(() => {
        getAllProducts()
        getUserInfo()
    }, []);
    useEffect(() => {
        // console.log("Updated loginInfo:", loginInfo);
    }, [loginInfo]);

    return <Context.Provider value={{ allProductsInfo, loginInfo, setloginInfo ,isLogedin,setisLogedin}}>
        {children}
    </Context.Provider>
}
