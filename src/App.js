import "./App.css";
import Banner from "./components/banner";
import Carousel from "./components/carousel";
import Faq from "./components/faq";
import Navbar from "./components/navbar";
import Registration from "./components/registration/Registration";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Carousel/>
      {/* <Registration/> */}
      {/* <Faq /> */}
    </div>
  );
}

export default App;
