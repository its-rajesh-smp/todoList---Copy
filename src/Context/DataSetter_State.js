import React, { useEffect, useState } from 'react';
import DataSetter_Context from './DataSetter_Context';

// Firebase
import DB from "../Firebase/FIREBASE_CONFIG"
import { collection, getDocs } from "firebase/firestore";

const DataSetter_Provider=(props)=>{

        //! GET DATA

        // Make A Connection To Get The Data from ______ user _____ Collection
        const USER_COLLECTION_REFERENC = collection(DB, "user");


        // State To Place Data in DOM
        const [SETDATA, SETDATA_FUNC] = useState([]);
    
    
        // Get Data From Storage And Form An Array
        useEffect(() => {
            async function GET_DATA_FROM_STORE() {
                // GETDOCS =====================================================>USED TO GET DATA FROM FIRESTORE
                const DATA = await getDocs(USER_COLLECTION_REFERENC);
    
                const ARRAY_DATA = DATA.docs.map((val) => {
                    return val._document.data.value.mapValue.fields;
                });
    
                SETDATA_FUNC(ARRAY_DATA);
            }
            GET_DATA_FROM_STORE();
        }, []);
    
        
 
        //! ADD DATA 
        // State To grab Data
        const[getData,getData_FUNC]=useState([])

    
    return (
        <DataSetter_Context.Provider value={{getData , getData_FUNC , SETDATA}}>
            {props.children}
        </DataSetter_Context.Provider>
    )
}



export default DataSetter_Provider