import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route  } from "react-router-dom";

import Navbar from './component/navbar.component';
import Home from './component/home.component';
import About from './component/about.component';
import Services from './component/services.component';
import Health from './component/health.component';
import News from './component/news.component';
import Footer from './component/footer.component';
import Contact from './component/contact.component';
import VideoPlayer from './component/videoPlayer.component';
import CovidTip from './component/health tips/covidTip.component';
import VaccineTip from './component/health tips/vaccineTip.component';
import ObesityTip from './component/health tips/obesityTip.component';
import ConcussionTip from './component/health tips/concussionTip.component';
import AllergyTip from './component/health tips/allergyTip.component';

function App() {
  return (
    <div>
      <Navbar/>

      <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/services' element={<Services />}/>
            <Route path='/health' element={<Health />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/video' element={<VideoPlayer />}/>
            <Route path='/covid19' element={<CovidTip />} />
            <Route path='/covidVaccine' element={<VaccineTip />} />
            <Route path='/weightLoss' element={<ObesityTip />} />
            <Route path='/concussion' element={<ConcussionTip />} />
            <Route path='/allergies' element={<AllergyTip />} />
          </Routes>
        </BrowserRouter>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
