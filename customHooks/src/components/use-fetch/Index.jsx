import { useEffect, useState } from "react";




export default function UseFetch({url , options={}}){

    const [data , setData ] = useState([]);
    const [loading , setLoading] = useState(false);
    const [error, setError]= useState(null);

    async function fetchData( getUrl){
        setLoading(true)
        try {
            
            const res= await fetch(getUrl);
            if(!res.ok) throw new Error(res.statusText);
            const data= await res.json()

            setData(data)
            console.log(data)
            setLoading(false)
            
        } catch (e) {
            console.log(e);
            setError(e);
            setLoading(false)
        }
    }

    useEffect(()=>{
        fetchData(url);
    },[])



    return( 
        {data , error , loading}
    )

}