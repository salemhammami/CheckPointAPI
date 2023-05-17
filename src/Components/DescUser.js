import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const DescUser=()=>{
    const {id}=useParams()
    const [user,setUser]=useState({})
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res)=>setUser(res.data))
        .then(()=>setLoading(false))
        .catch((err)=>console.log(err))
    },[])
    return(
        <div>
            <h1>desc</h1>
            {
                loading ? 
                <h1>Loading</h1>
                :
                <>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                <h3>{user.address.street}</h3>
                </>
            }
               
            

        </div>
    )
}


export default DescUser