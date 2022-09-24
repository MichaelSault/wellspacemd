import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from './component/navbar.component';
import Home from './component/home.component';
import About from './component/about.component';
import Services from './component/services.component';
import Health from './component/health.component';
import News from './component/news.component';
import Footer from './component/footer.component';
import Contact from './component/contact.component';
import VideoPlayer from './component/videoPlayer.component';

function App() {
  return (
    <div>
      <Navbar/>

      
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/health' element={<Health />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/video' element={<VideoPlayer />}/>
          </Routes>
        </Router>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
