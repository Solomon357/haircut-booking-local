import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages"
import { FormProvider } from "./context/FormContext";
import ProgressBarTest from "./testingcomponents/ProgressBarTest";
import HaircutForm from "./pages/HaircutForm";
import FormTestPage4 from "./testingcomponents/FormTestPage4";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookHaircut" element={<FormProvider><HaircutForm /></FormProvider>}/>
          <Route path="/multiFormTest" element={<FormProvider><ProgressBarTest /><FormTestPage4 /></FormProvider>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
