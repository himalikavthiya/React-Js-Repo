import { Route, Routes } from "react-router-dom";
import "./App.css";
// import Details from "./components/formExample/Details";
import Home from "./components/routingNav/Home";
import Navbar from "./components/routingNav/Navbar";
import Contact from "./components/routingNav/Contact";
import About from "./components/routingNav/About";
import View from "./components/routingNav/View";
// import Card from "./components/Card";
import Counter from "./components/Counter";
// import { data } from "./components/Data";
// import Form1 from "./components/Form1";
// import { bookObject } from "./components/formExample/Object";

function App() {
  return (
    <div className="App">
      <div className="row">
        <Navbar />
        {/* SET ROUTES  */}
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/about" exact element={<About />}></Route>
          <Route path="/contact" exact element={<Contact />}></Route>
          <Route path="/:product" exact element={<View />}></Route>
        </Routes>
      </div>
      <Counter /> {/* <Form1 /> */}
    </div>
  );
}
export default App;
