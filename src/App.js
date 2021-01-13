import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Main from './components/Main';
import Footer from './components/Footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <HeroSection />
      <Main />
      <Footer />
      <Switch>
      
      </Switch>
    </Router>
    </>

  );
}

export default App;
