import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Contacts } from "./components/Contacts";
import { Experiences } from './components/Experiences';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Experiences />
      <Contacts />
    </div>
  );
}

export default App;
