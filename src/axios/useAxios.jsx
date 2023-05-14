
import { useState } from 'react'
import axios from './axios'
import { useEffect } from 'react'

export const useAxios = ({ url,method,body =null,headers = null }) => {

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(false)

    const fetchData = async() => {
        setLoading(true)
        try{
        
        }catch(err) {
            console.log('Error in axios hook'+err);
        }
    }

    useEffect(() => {
        fetchData();
    }, [method, url, body, headers]);

    return { data,loading }

}