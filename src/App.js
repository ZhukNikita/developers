import './App.css';
import NavBar from "./components/NavBar/NavBar";
import InfoBlock from "./components/InfoBlock/InfoBlock";
import BurgerBlock from "./components/BurgerBlock/BurgerBlock";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <InfoBlock/>
        <BurgerBlock/>
    </div>
  );
}

export default App;
