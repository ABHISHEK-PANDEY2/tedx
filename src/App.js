import "./App.css";
import Banner from "./components/banner";
import Faq from "./components/faq";
import Navbar from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      {/* <Faq /> */}
    </div>
  );
}

export default App;
