import "./App.css";
import Banner from "./components/banner";
import Faq from "./components/faq";
import Registration from "./components/registration/Registration";
function App() {
  return (
    <div className="App">
      <Registration/>
      <Faq />
    </div>
  );
}

export default App;
