import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Stamping from './pages/Services/Stamping';
import Assembly from './pages/Services/Assembly';
import Aluminium from './pages/Services/Aluminium';
import Machining from './pages/Services/Machining';
import Fabrication from './pages/Services/Fabrication';
import Tooling from './pages/Services/Tooling';
import Warehousing from './pages/Warehousing';
import Sourcing from './pages/Sourcing';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/stamping" element={<Stamping />} />
            <Route path="/services/assembly" element={<Assembly />} />
            <Route path="/services/aluminium" element={<Aluminium />} />
            <Route path="/services/machining" element={<Machining />} />
            <Route path="/services/fabrication" element={<Fabrication />} />
            <Route path="/services/tooling" element={<Tooling />} />
            <Route path="/warehousing" element={<Warehousing />} />
            <Route path="/sourcing" element={<Sourcing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
