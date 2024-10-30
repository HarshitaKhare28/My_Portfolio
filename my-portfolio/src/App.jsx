import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Components/Header'; 
import { Profile } from './Components/Profile';
import { Projects } from './Components/Projects';
import { Contact } from './Components/Contact';
import './index.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mx-auto px-4">
        {/* Profile Section */}
        <Profile />

        {/* Project Section */}
        <Projects />

        {/* Contact Form Section */}
        <Contact />
      </div>
    </Router>
  );
}

export default App;
