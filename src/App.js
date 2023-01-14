import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner";
import About from "./components/about/about";
import Faq from "./components/faq/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
import ContactUs from "./components/contactUs/contactUs";
import Footer from "./components/footer/footer";
import Timeline from "./components/timeline/timeline";
import PageNotFound from "./components/PageNotFound";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route 
        path="/" 
        element={
        <>
      <Navbar />
      <Banner />
      <Timeline />
      <About />
      <Faq />
      <ContactUs />
      <Footer />
        </>}/>
      <Route path="reg" element={<Registration />}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
