import './App.css';
import NavBar from "./components/NavBar/NavBar";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import BurgerBlock from "./components/BurgerBlock/BurgerBlock";
import SliderBlock from "./components/SliderBlock/SliderBlock";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <InfoBlock/>
        <BurgerBlock/>
        <SliderBlock/>
    </div>
  );
}

export default App;
