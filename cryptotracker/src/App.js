import { BrowserRouter, Route } from "react-router-dom"
import './App.css';
import Header from "./components/Header";
import CoinPage from "./pages/CoinPage";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Route path="/" component={Homepage} />
        <Route path="/coins/:id" component={CoinPage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
