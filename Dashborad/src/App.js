import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/User/Pages/Home";
import Dashboard from "./components/Admin/Pages/Dashborad";
import Navbar from "./components/Atoms/Header/Navbar";
import NotFoundPage from "./components/Atoms/NotFoundPage";
import Login from "./components/Atoms/Body/Login";
import About from "./components/Admin/Pages/About";
import { useEffect, useState } from "react";
import Product from "./components/User/Pages/Product";
import Products from "./components/Admin/Pages/Products";
import Sidebar from "./components/Admin/components/Sidebar";
import userNav from "./components/User/Header/userNav";

function App() {
  const role = "user";
  const [data, setdata] = useState();

  const arr = localStorage.getItem("data")
    ? JSON.parse(localStorage.getItem("data"))
    : [];

  localStorage.setItem("data", JSON.stringify(arr));

  useEffect(() => {
    setdata(arr);
  }, []);

  if (role === "admin") {
    return (
      <>
        
        {/* <Navbar /> */} {/* data={adminNav} */}
        <Sidebar>
          <Routes>
            
            {/* <Route path="/" element={<Dashborad/>} />
                                                  <Route path="/list" element={<List/>} />
                                                  <Route path="*" element={<NotFoundPage/>} /> */}
            {/* <Route path="/" element={<Dashboard />} /> */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<Products />} />
          </Routes>
        </Sidebar>
      </>
    );
  } else if (role === "user") {
    return (
      <>
        <Navbar data={userNav} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </>
    );
  } else {
    return <Login />;
  }
}

export default App;
