import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={Home} />
          <Route path="/products" exact element={Products} />
          <Route path="/login" exact element={Login} />
        </Routes>
        <Home></Home>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
