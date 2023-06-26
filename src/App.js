import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Skills from './components/Skills';
import Work from './components/Work';
import Nav from './components/Nav';
import { Animation, Typer } from 'react-easy-animations'

function App() {
  return (
    <div className="home-cont">
      <BrowserRouter>
        <Animation
          type="fadeInFromTop"
          duration="500ms"
          delay="0s"
          direction="normal"
          timing="ease"
          iteration="1"
          fillMode="none"
          width="90%"
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Nav />
          </div>
        </Animation>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
