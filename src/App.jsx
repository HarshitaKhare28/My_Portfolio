import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Components/Header'; 
// import { Profile } from './Components/Profile';
// import { Projects } from './Components/Projects';
// import { Contact } from './Components/Contact';
import { Home } from './Components/Home';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        {/* <Route path="/" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
