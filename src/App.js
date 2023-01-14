import "./App.css";
import Banner from "./components/banner";
import About from "./components/about/about";
import Faq from "./components/faq/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
import ContactUs from "./components/contactUs/contactUs";
import Footer from "./components/footer/footer";
import Timeline from "./components/timeline/timeline";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Registration />
      <Timeline />
      <About />
      <Faq />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
