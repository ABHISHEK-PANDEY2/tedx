import "./App.css";
import Banner from "./components/banner";
import About from "./components/about/about";
import Faq from "./components/faq/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
import ContactUs from "./components/contactUs/contactUs";
import Footer from "./components/footer/footer";
import Timeline from "./components/timeline/timeline";
import Carousel from "./components/carousel";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Carousel/>
      {/* <Registration />
      <Timeline />
      <About />
      <Faq />
      <ContactUs />
      <Footer /> */}
    </div>
  );
}

export default App;
