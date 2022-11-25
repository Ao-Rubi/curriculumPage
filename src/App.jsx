import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from './components/common/Menu';
import Footer from './components/common/Footer';
import Body from './components/Body';

function App() {
  return (
    <div className="App">
      <Menu></Menu>
      <Body></Body>
      <Footer></Footer>
    </div>
  );
}

export default App;
