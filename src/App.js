import { Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./components/banner";
import About from "./components/about/about";
import Faq from "./components/faq/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Timeline from "./components/timeline/timeline";
import PageNotFound from "./components/PageNotFound";
import Team from "./components/team/team";
import Galary from "./components/galary/Galary";
import Carousel from "./components/carousel/Carousel";
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
              <div className="wrapper-container">
                <Carousel />
                {/* <Carousel/> */}
                <Timeline />
                <About />
                <Galary />
                <Faq />
                <Contact />
              </div>
              {/* <Footer /> */}
            </>
          }
        />
        <Route path="reg" element={<Registration />} />
        <Route path="team" element={<Team />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
