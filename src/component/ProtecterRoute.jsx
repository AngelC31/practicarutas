import { Navigate } from "react-router-dom";


export const ProtecterRoute =({estaPermitido, children, redirectTo='/'})=>{
    if(!estaPermitido){
        return(<Navigate to={redirectTo}/>)
    }
    return(
        children
    )

}
export default ProtecterRoute;
