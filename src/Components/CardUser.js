import { Link } from "react-router-dom"

const CardUser=({el})=>{
    return(
        <div>
            
            <h1><Link to={`/descuser/${el.id}`}>{el.name}</Link></h1>
            
            

        </div>
    )
}



export default CardUser