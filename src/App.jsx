import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import Hero from './Components/HeroSection/Hero';
import Work from './Components/WorkSection/Work';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App
