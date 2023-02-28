import { useNavigate } from "react-router-dom";

const Dashboard=()=>{
    const navigate=useNavigate();
    const handlerClick=()=>{
        navigate('/')
    }
    return(
        <div className="container">
            <button className="btn btn-danger" onClick={handlerClick}>Log out</button>
        </div>
    )
}
export default Dashboard;