import { Navigate } from 'react-router-dom';

const Home =({user})=>{
    if(!user){
        return <Navigate to='/'/>
    }
    return(
        <div>Home (Public)</div>
    )
}
export default Home