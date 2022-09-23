import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Navbar from './component/navbar.component';
import Home from './component/home.component';
import Footer from './component/footer.component';

function App() {
  return (
    <div>
      <Navbar/>

      <Home/>

      <Footer/>

      
    </div>
  );
}

export default App;
