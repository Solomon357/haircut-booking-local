import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Feed } from "./pages"
import FormTest from "./testingcomponents/FormTest";
import { FormProvider } from "./context/FormContext";
import ProgressBarTest from "./testingcomponents/ProgressBarTest";
import HaircutForm from "./pages/HaircutForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employer" >
          <Route path="/employer/dashboard" element={<FormProvider><HaircutForm /></FormProvider>}/>
          {/* <Route path="/employer/create" element={<Create />}/> */}
          </Route>
          <Route path="/employee/feed" element={<Feed />}/>
          <Route path="/multiFormTest" element={<FormProvider><ProgressBarTest /><FormTest /></FormProvider>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
