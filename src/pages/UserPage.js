import { useParams } from "react-router-dom";

const UserPage =()=>{
    const {id}=useParams();
    return(
        <div className="container">
            User <h1>'{{id}}'</h1>
        </div>
    )
}
export default UserPage