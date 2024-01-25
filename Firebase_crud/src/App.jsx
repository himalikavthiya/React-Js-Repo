import './App.css'
import Login from './components/Login'
import UserList from './components/UserList'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    {/* <Outlet/> */}
     <BrowserRouter>
        <Routes>
          {/* <Route path="/"> */}
            <Route index path="login"  element={<Login />} />
            {/* </Route> */}
         
            {/* <Route path="users"> */}
            <Route path="users" element={<UserList/>}/>
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
