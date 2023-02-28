import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Users from './pages/Users';
import NotFound from './pages/NotFound';
import NavBar from './component/NavBar';
import UserPage from './pages/UserPage';
import Admin from './pages/Admin';
import Analytics from './pages/Analytics';
import { useState, Login, Logout } from 'react';
import ProtecterRoute from './component/ProtecterRoute';
const App =()=>{
    const [user,setUser]=useState(null);
    const login=()=>{
        setUser({
            id: 1,
            user:"Amgel",
            permission: 'analize'
        })
    }
    const logout=()=>setUser(null)
    return(
        
        <BrowserRouter>
        <NavBar/>
        {
            user ?(
                <button className='btn btn-danger' onClick={Logout}>Logout</button>
            ):
            (<button className='btn btn-primary' onClick={Login}>Login</button>)
        }
            <Routes>
                <Route path="/home" element={
                    <ProtecterRoute estaPermitido={user?true:false}>
                        <Home/>
                    </ProtecterRoute>
                }/>
                <Route path="/" element={<About/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/users/10" element={<UserPage/>}/>
                <Route path="*" element={<NotFound/>}/>
                <Route path='/admin' element={<Admin/>}/>
                <Route path='/analytics' element={
                    <ProtecterRoute estaPermitido={!!user && user.permission.includes('analize')} redirectTo='/home'>
                        <Analytics/>
                    </ProtecterRoute>}/>
                
            </Routes>
        </BrowserRouter>
      
    )
}
export default App