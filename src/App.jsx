import "./App.css";
import Creaate from "./components/Creaate";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Read from "./components/read";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Creaate/>}/>
        <Route path="/read" element={<Read/>}/>

      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
