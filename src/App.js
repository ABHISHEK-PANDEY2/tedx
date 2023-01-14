import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner";
import Faq from "./components/faq";
import Registration from "./components/registration/Registration";
import PageNotFound from "./components/PageNotFound";
import Navbar from "./components/navbar";


function App() {
  return (
    <div className="App">
      {/* <Navbar/> */}
      <Routes>
        <Route path="registration" element={<Registration/>}/>
        <Route path="/" element={<>
        <Banner/>
        <Faq />
         </>}
        />
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
