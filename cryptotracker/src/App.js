import { BrowserRouter } from "react-router-dom"
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
      </div>
    </BrowserRouter>
  );
}

export default App;
