import "./App.css";
import Creaate from "./components/Creaate";
import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Read from "./components/read";
import Update from "./components/Update";
function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Creaate/>}/>
        <Route path="/read" element={<Read/>}/>
        <Route path="/edit/:id" element={<Update/>}/>
      </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
