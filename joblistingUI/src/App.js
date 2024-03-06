import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"
import { FormProvider } from "./context/FormContext";
import HaircutForm from "./pages/HaircutForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookHaircut" element={<FormProvider><HaircutForm /></FormProvider>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
