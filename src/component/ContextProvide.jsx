import React from 'react'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export const DataContext = React.createContext();
const ContextProvide = ({ children }) => {

    const [product, setproduct] = useState([]);

     product.products.forEach(element => {
            console.log(element)
     });

    const Getdata = async () => {

        // movies api -----
         await axios.get("https://dummyjson.com/products").then((res) => {
        let result =   res.data;
             setproduct(result)
        })
    }

    useEffect(() => {
        Getdata()
    },[])

    return <DataContext.Provider value={ product} >
        {children}
    </DataContext.Provider>

}

export default ContextProvide