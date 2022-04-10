import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router";
import { Home } from "./components/pages/Home";
import { Form1 } from "./components/pages/Form1";
import { Form2 } from "./components/pages/Form2";
import { Navbar } from "./components/pages/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registration/one" element={<Form1 />}></Route>
        <Route path="/registration/two" element={<Form2 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
