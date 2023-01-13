import "./App.css";
import Banner from "./components/banner";
import About from "./components/about/about";
import Faq from "./components/faq/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
import ContactUs from "./components/contactUs/contactUs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Registration />
      <About />
      <Faq />
      <ContactUs />
    </div>
  );
}

export default App;
